public class SingletonTest {
    public static void main(String ar[])
    {
        Logger Log1=Logger.getInstance();
        Logger Log2=Logger.getInstance();
        Log1.log("First Msg");
        Log2.log("Second Msg");
    }
    
}
