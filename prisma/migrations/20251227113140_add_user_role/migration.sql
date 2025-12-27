-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- CreateIndex
CREATE INDEX `account_userId_idx` ON `account`(`userId`(191));

-- CreateIndex
CREATE INDEX `session_userId_idx` ON `session`(`userId`(191));
