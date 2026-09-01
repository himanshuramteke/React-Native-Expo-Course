import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

const ensureNotesTable = async (database: SQLite.SQLiteDatabase) => {
  const tableInfo = await database.getFirstAsync<{ name: string }>(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'notes'",
  );

  if (tableInfo) {
    const columns = await database.getAllAsync<{ name: string }>(
      "PRAGMA table_info(notes)",
    );
    const hasContentColumn = columns.some(
      (column) => column.name === "content",
    );
    const hasTitleColumn = columns.some((column) => column.name === "title");
    const hasCreatedAtColumn = columns.some(
      (column) => column.name === "createdAt",
    );

    if (!hasContentColumn || !hasTitleColumn || !hasCreatedAtColumn) {
      await database.execAsync(`ALTER TABLE notes RENAME TO notes_backup;`);
      await database.execAsync(`
        CREATE TABLE notes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          content TEXT,
          createdAt TEXT
        );
      `);

      await database.execAsync(`
        INSERT INTO notes (id, title, content, createdAt)
        SELECT
          id,
          ${hasTitleColumn ? "title" : "''"},
          ${hasContentColumn ? "content" : "''"},
          ${hasCreatedAtColumn ? "createdAt" : "datetime('now')"}
        FROM notes_backup;
      `);

      await database.execAsync(`DROP TABLE notes_backup;`);
    }
  }

  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      createdAt TEXT
    );
  `);
};

const getDatabase = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("notes.db");
    await ensureNotesTable(db);
  }
  return db;
};

export const initDatabase = async () => {
  await getDatabase();
};

export const getNotes = async (): Promise<any[]> => {
  const database = await getDatabase();
  return await database.getAllAsync(
    "SELECT * FROM notes ORDER BY createdAt DESC",
  );
};

export const addNote = async (title: string, content: string) => {
  const database = await getDatabase();
  const createdAt = new Date().toISOString();
  await database.runAsync(
    `INSERT INTO notes(title, content, createdAt) VALUES (?, ?, ?);`,
    [title, content, createdAt],
  );
};

export const updateNote = async (
  id: number,
  title: string,
  content: string,
) => {
  const database = await getDatabase();
  await database.runAsync(
    `UPDATE notes SET title = ?, content = ? WHERE id=?;`,
    [title, content, id],
  );
};

export const deleteNote = async (id: number) => {
  const database = await getDatabase();
  await database.runAsync(`DELETE FROM notes WHERE id = ?;`, [id]);
};
