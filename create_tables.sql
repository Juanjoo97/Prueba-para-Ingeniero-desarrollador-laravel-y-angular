CREATE TABLE estudiante (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    programa_academico VARCHAR(100) NOT NULL
);

INSERT INTO estudiante (nombre, correo, programa_academico) VALUES
('Carlos López', 'carlos.lopez@example.com', 'Ingeniería de Sistemas'),
('María García', 'maria.garcia@example.com', 'Medicina'),
('Jorge Rodríguez', 'jorge.rodriguez@example.com', 'Derecho');

CREATE TABLE medico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL
);

INSERT INTO medico (id, nombre, especialidad) VALUES
(1, 'Dr. Juan Pérez', 'Cardiología'),
(2, 'Dra. Ana Gómez', 'Pediatría'),
(3, 'Dr. Luis Fernández', 'Dermatología'),
(4, 'Dra. Carolina Ruiz', 'Neurología'),
(5, 'Dr. José Martínez', 'Ortopedia');

CREATE TABLE citas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT NOT NULL,
    medico_id INT NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT FALSE, -- 0: Pendiente, 1: Confirmada
    FOREIGN KEY (estudiante_id) REFERENCES estudiante(id) ON DELETE CASCADE,
    FOREIGN KEY (medico_id) REFERENCES medico(id) ON DELETE CASCADE
);

INSERT INTO citas (estudiante_id, medico_id, fecha, hora, estado)
VALUES (1, 2, '2025-02-10', '09:30:00', TRUE); 