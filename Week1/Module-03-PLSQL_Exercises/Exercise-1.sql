Scenario 1
BEGIN
    FOR c IN (SELECT customer_id, age FROM customers) LOOP
        IF c.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - 1
            WHERE customer_id = c.customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;
Scenario 2
BEGIN
    FOR c IN (SELECT customer_id, balance FROM customers) LOOP
        IF c.balance > 10000 THEN
            UPDATE customers
            SET isvip = 1
            WHERE customer_id = c.customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;
Scenario 3
BEGIN
    FOR l IN (
        SELECT loan_id, customer_id, due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || l.loan_id || ' due soon'
        );
    END LOOP;
END;