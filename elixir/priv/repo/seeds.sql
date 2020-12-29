INSERT INTO users
    (id, first_name, last_name, dob)
VALUES
    ('6da59d7a-04b5-466e-a345-152ab7053aaa', 'Ash', 'Ketchum', 'this is a string so 1990s'),
    ('6da59d7a-04b5-466e-a345-152ab7053bbb', 'Misty', 'Kasumi', 'this is a string so 1990s');

INSERT INTO merchants
    (id, name, description)
VALUES
    ('ae6eac99-54b2-439e-b106-9a19f014ee0d', 'Cerulean Gym', 'Kanto Gym for water-based pokemon'),
    ('ae6eac99-54b2-439e-b106-9a19f014ee0e', 'Celadon Gym', 'Kanto Gym for grass-based pokemon');

INSERT INTO company
    (id, name, credit_line, available_credit)
VALUES
    ('9b7d31cc-3ce4-49d9-a4aa-55a621f83e43', 'Kanto Bank', 100, 40);

INSERT INTO transactions
    (id, amount, credit, debit, description, user_id, merchant_id)
VALUES
    ('f0dd367d-3032-47d7-a175-471c9e25a284', 20, false, true, 'Cascade Badge', '6da59d7a-04b5-466e-a345-152ab7053aaa', 'ae6eac99-54b2-439e-b106-9a19f014ee0d', '9b7d31cc-3ce4-49d9-a4aa-55a621f83e43'),
    ('f0dd367d-3032-47d7-a175-471c9e25a284', 20, false, true, 'Rainbow Badge', '6da59d7a-04b5-466e-a345-152ab7053aaa', 'ae6eac99-54b2-439e-b106-9a19f014ee0e', '9b7d31cc-3ce4-49d9-a4aa-55a621f83e43');




