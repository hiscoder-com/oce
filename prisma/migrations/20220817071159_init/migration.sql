-- CreateTable
CREATE TABLE "Repo" (
    "repo" TEXT NOT NULL,
    "packageName" TEXT,
    "logo" TEXT,
    "description" TEXT,
    "ownerAvatar" TEXT,
    "release" TEXT,
    "releaseDate" TEXT,
    "license" TEXT,

    CONSTRAINT "Repo_pkey" PRIMARY KEY ("repo")
);

-- CreateTable
CREATE TABLE "Depend" (
    "packageName" TEXT NOT NULL,

    CONSTRAINT "Depend_pkey" PRIMARY KEY ("packageName")
);

-- CreateTable
CREATE TABLE "ReposDepends" (
    "repoId" TEXT NOT NULL,
    "dependId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Topic" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "ReposTopics" (
    "repoId" TEXT NOT NULL,
    "topicId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Repo_repo_key" ON "Repo"("repo");

-- CreateIndex
CREATE UNIQUE INDEX "Depend_packageName_key" ON "Depend"("packageName");

-- CreateIndex
CREATE UNIQUE INDEX "ReposDepends_repoId_dependId_key" ON "ReposDepends"("repoId", "dependId");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ReposTopics_repoId_topicId_key" ON "ReposTopics"("repoId", "topicId");

-- AddForeignKey
ALTER TABLE "ReposDepends" ADD CONSTRAINT "ReposDepends_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("repo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReposDepends" ADD CONSTRAINT "ReposDepends_dependId_fkey" FOREIGN KEY ("dependId") REFERENCES "Depend"("packageName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReposTopics" ADD CONSTRAINT "ReposTopics_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("repo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReposTopics" ADD CONSTRAINT "ReposTopics_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
