-- Table Schema Template:
CREATE TABLE "us" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(500) NOT NULL,
  "ishungry" BOOLEAN DEFAULT FALSE,
  "inserted_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed Data Template:
INSERT INTO "us"
  ("name", "ishungry")
  VALUES
  ('Lexi', true),
  ('Heather', false),
  ('Mahad', true),
  ('Mustafa', false);
