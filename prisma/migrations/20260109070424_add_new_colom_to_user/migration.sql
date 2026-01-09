-- AlterTable
ALTER TABLE `user` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `account_userId_idx` ON `account`(`userId`(191));

-- CreateIndex
CREATE INDEX `session_userId_idx` ON `session`(`userId`(191));
