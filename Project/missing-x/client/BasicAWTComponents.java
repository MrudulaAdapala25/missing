import java.awt.*;

public class BasicAWTComponents extends Frame {
    public BasicAWTComponents() {
        // Create components
        Label label = new Label("Hello, AWT!");
        TextField textField = new TextField("Enter text here");
        TextArea textArea = new TextArea("This is a multi-line text area");
        Button button = new Button("Click me");
        Checkbox checkbox = new Checkbox("Check me");
        Choice choice = new Choice();
        choice.add("Option 1");
        choice.add("Option 2");
        choice.add("Option 3");
        List list = new List();
        list.add("Item 1");
        list.add("Item 2");
        list.add("Item 3");

        // Add components to the frame
        add(label);
        add(textField);
        add(textArea);
        add(button);
        add(checkbox);
        add(choice);
        add(list);

        // Set frame properties
        setSize(400, 300);
        setTitle("Basic AWT Components");
        setVisible(true);
    }

    public static void main(String[] args) {
        new BasicAWTComponents();
    }
}