-- ============================================================
-- Hotelliruumi reserveerimise andmebaas
-- SQL laused MS Access jaoks (kasuta Access'i SQL vaadet)
-- ============================================================

-- ------------------------------------------------------------
-- 1. TABELITE LOOMINE
-- ------------------------------------------------------------

CREATE TABLE guest (
    id AUTOINCREMENT PRIMARY KEY,
    first_name TEXT(80),
    last_name TEXT(80) NOT NULL,
    member_since DATETIME
);

CREATE TABLE room_type (
    id AUTOINCREMENT PRIMARY KEY,
    description TEXT(80),
    max_capacity INTEGER
);

CREATE TABLE reservation (
    id AUTOINCREMENT PRIMARY KEY,
    date_in DATETIME,
    date_out DATETIME,
    made_by TEXT(20),
    guest_id INTEGER,
    CONSTRAINT fk_reservation_guest FOREIGN KEY (guest_id) REFERENCES guest(id)
);

CREATE TABLE room (
    id AUTOINCREMENT PRIMARY KEY,
    number TEXT(10),
    name TEXT(40),
    status TEXT(10),
    smoke YESNO,
    room_type_id INTEGER,
    CONSTRAINT fk_room_room_type FOREIGN KEY (room_type_id) REFERENCES room_type(id)
);

CREATE TABLE reserved_room (
    id AUTOINCREMENT PRIMARY KEY,
    number_of_rooms INTEGER,
    room_type_id INTEGER,
    reservation_id INTEGER,
    status TEXT(20),
    CONSTRAINT fk_reserved_room_room_type FOREIGN KEY (room_type_id) REFERENCES room_type(id),
    CONSTRAINT fk_reserved_room_reservation FOREIGN KEY (reservation_id) REFERENCES reservation(id)
);

CREATE TABLE occupied_room (
    id AUTOINCREMENT PRIMARY KEY,
    check_in DATETIME,
    check_out DATETIME,
    room_id INTEGER,
    reservation_id INTEGER,
    CONSTRAINT fk_occupied_room_room FOREIGN KEY (room_id) REFERENCES room(id),
    CONSTRAINT fk_occupied_room_reservation FOREIGN KEY (reservation_id) REFERENCES reservation(id)
);

CREATE TABLE hosted_at (
    id AUTOINCREMENT PRIMARY KEY,
    guest_id INTEGER,
    occupied_room_id INTEGER,
    CONSTRAINT fk_hosted_at_guest FOREIGN KEY (guest_id) REFERENCES guest(id),
    CONSTRAINT fk_hosted_at_occupied_room FOREIGN KEY (occupied_room_id) REFERENCES occupied_room(id)
);


-- ------------------------------------------------------------
-- 2. ANDMETE LISAMINE
-- ------------------------------------------------------------

-- Külalised
INSERT INTO guest (first_name, last_name, member_since)
VALUES ('Jaan', 'Tamm', #2022-03-15#);

INSERT INTO guest (first_name, last_name, member_since)
VALUES ('Mari', 'Mets', #2023-07-01#);

-- Toa tüübid
INSERT INTO room_type (description, max_capacity)
VALUES ('Standard tuba', 2);

INSERT INTO room_type (description, max_capacity)
VALUES ('Luksustuba', 4);

-- Toad
INSERT INTO room (number, name, status, smoke, room_type_id)
VALUES ('101', 'Standard 101', 'vaba', No, 1);

INSERT INTO room (number, name, status, smoke, room_type_id)
VALUES ('201', 'Lux 201', 'vaba', No, 2);

-- Reserveeringud
INSERT INTO reservation (date_in, date_out, made_by, guest_id)
VALUES (#2026-09-15#, #2026-09-18#, 'Jaan Tamm', 1);

INSERT INTO reservation (date_in, date_out, made_by, guest_id)
VALUES (#2026-10-01#, #2026-10-05#, 'Mari Mets', 2);

-- Reserveeritud toad
INSERT INTO reserved_room (number_of_rooms, room_type_id, reservation_id, status)
VALUES (1, 1, 1, 'kinnitatud');

INSERT INTO reserved_room (number_of_rooms, room_type_id, reservation_id, status)
VALUES (1, 2, 2, 'kinnitatud');

-- Hõivatud toad
INSERT INTO occupied_room (check_in, check_out, room_id, reservation_id)
VALUES (#2026-09-15 14:00:00#, #2026-09-18 11:00:00#, 1, 1);

INSERT INTO occupied_room (check_in, check_out, room_id, reservation_id)
VALUES (#2026-10-01 14:00:00#, #2026-10-05 11:00:00#, 2, 2);

-- Majutatud külalised
INSERT INTO hosted_at (guest_id, occupied_room_id)
VALUES (1, 1);

INSERT INTO hosted_at (guest_id, occupied_room_id)
VALUES (2, 2);
