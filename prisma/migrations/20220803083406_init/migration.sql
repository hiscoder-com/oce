-- CreateTable
CREATE TABLE "Repo" (
    "repo" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "logo" TEXT
);

-- CreateTable
CREATE TABLE "Topic" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ReposTopics" (
    "repoId" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    CONSTRAINT "ReposTopics_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo" ("repo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ReposTopics_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReposRepos" (
    "repoFromId" TEXT NOT NULL,
    "repoToId" TEXT NOT NULL,
    CONSTRAINT "ReposRepos_repoFromId_fkey" FOREIGN KEY ("repoFromId") REFERENCES "Repo" ("repo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ReposRepos_repoToId_fkey" FOREIGN KEY ("repoToId") REFERENCES "Repo" ("repo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Repo_repo_key" ON "Repo"("repo");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ReposTopics_repoId_topicId_key" ON "ReposTopics"("repoId", "topicId");

-- CreateIndex
CREATE UNIQUE INDEX "ReposRepos_repoFromId_repoToId_key" ON "ReposRepos"("repoFromId", "repoToId");
