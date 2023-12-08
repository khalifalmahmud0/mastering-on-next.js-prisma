-- CreateTable
CREATE TABLE `blobAndBinary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tiny_blob` TINYBLOB NOT NULL,
    `medium_blob` MEDIUMBLOB NOT NULL,
    `default_blob` BLOB NOT NULL,
    `big_blob` LONGBLOB NOT NULL,
    `binary` BINARY(100) NOT NULL,
    `varBinary` VARBINARY(100) NOT NULL,
    `bit` BIT(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
