package com.example;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown");
    }

    @Test
    public void testAdd() {

        int a = 5;
        int b = 3;

        int result = calculator.add(a, b);

        assertEquals(8, result);
    }
}