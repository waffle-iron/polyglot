DROP DATABASE IF EXISTS "lango";
CREATE DATABASE "lango";

\c "lango";

CREATE TABLE "users" (
  "id"  SERIAL ,
  "first_name" VARCHAR ,
  "last_name" VARCHAR ,
  "email" VARCHAR ,
  "facebook_id" VARCHAR ,
  PRIMARY KEY ("id")
);

CREATE TABLE "learners" (
  "id"  SERIAL ,
  "user_id" INTEGER ,
  "language_id" INTEGER ,
  "level" VARCHAR ,
  PRIMARY KEY ("id")
);

CREATE TABLE "teachers" (
  "id"  SERIAL ,
  "user_id" INTEGER ,
  "language_id" INTEGER ,
  PRIMARY KEY ("id")
);

CREATE TABLE "languages" (
  "id"  SERIAL ,
  "name" VARCHAR ,
  PRIMARY KEY ("id")
);

CREATE TABLE "sessions" (
  "id"  SERIAL ,
  "teacher_id" INTEGER ,
  "learner_id" INTEGER ,
  "timestamp" TIMESTAMP ,
  "duration" TIME ,
  "transcription_location" VARCHAR ,
  "learner_rating" INTEGER ,
  "teacher_rating" INTEGER ,
  PRIMARY KEY ("id")
);

ALTER TABLE "learners" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "learners" ADD FOREIGN KEY ("language_id") REFERENCES "languages" ("id");
ALTER TABLE "teachers" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "teachers" ADD FOREIGN KEY ("language_id") REFERENCES "languages" ("id");
ALTER TABLE "sessions" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id");
ALTER TABLE "sessions" ADD FOREIGN KEY ("learner_id") REFERENCES "learners" ("id");
