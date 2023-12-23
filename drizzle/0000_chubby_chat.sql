CREATE TABLE `universities` (
	`id` varchar(100) NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` varchar(255),
	CONSTRAINT `universities_id` PRIMARY KEY(`id`),
	CONSTRAINT `slug_idx` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(100) NOT NULL,
	`name` varchar(256) NOT NULL,
	`username` varchar(50) NOT NULL,
	`email` varchar(100) NOT NULL,
	`university` varchar(100) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `username_idx` UNIQUE(`username`),
	CONSTRAINT `email_idx` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_university_universities_id_fk` FOREIGN KEY (`university`) REFERENCES `universities`(`id`) ON DELETE cascade ON UPDATE cascade;
