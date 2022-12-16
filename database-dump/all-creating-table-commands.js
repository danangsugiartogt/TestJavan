// CREATE TABLE persons
// (
//     id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
//     name        VARCHAR(20) NOT NULL,
//     gender      VARCHAR(10) NOT NULL,
//     PRIMARY KEY (id)
// );

// CREATE TABLE person_relations
// (
//     id               INT UNSIGNED NOT NULL AUTO_INCREMENT,
//     child_id         INT UNSIGNED NOT NULL,
//     parent_id        INT UNSIGNED NOT NULL,
//     PRIMARY KEY (id),
//     FOREIGN KEY (child_id) REFERENCES persons (id),
//     FOREIGN KEY (parent_id) REFERENCES persons (id)
// );

// CREATE TABLE assets
// (
//     id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
//     name         VARCHAR(50) NOT NULL,
//     PRIMARY KEY (id)
// );

// CREATE TABLE person_assets
// (
//     id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
//     person_id    INT UNSIGNED NOT NULL,
//     asset_id     INT UNSIGNED NOT NULL,
//     PRIMARY KEY (id),
//     FOREIGN KEY (person_id) REFERENCES persons (id),
//     FOREIGN KEY (asset_id) REFERENCES assets (id)
// );