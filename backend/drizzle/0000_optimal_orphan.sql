CREATE TABLE `parts` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`code` varchar(64),
	`type` varchar(64),
	`price` decimal(6,2),
	CONSTRAINT `parts_id` PRIMARY KEY(`id`),
	CONSTRAINT `code_idx` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `parts` (`name`);