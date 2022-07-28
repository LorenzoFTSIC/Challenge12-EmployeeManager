INSERT INTO department (name)
VALUES  ("Marketing"),
        ("HR"),
        ("R&D"),
        ("Management");

INSERT INTO role (title, salary, department_id)
VALUES  ("Marketing Director", "100000", "1"),
        ("HR Rep", "115000", "2"),
        ("Head Researcher", "175000", "3"),
        ("Manager", "185000", "4");


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("James", "Smith", "1", "4"),
       ("Michael", "Garcia", "2", "4"),
       ("Maria", "Rodriguez", "3", "4"),
       ("James", "Johnson", "4", "0" );