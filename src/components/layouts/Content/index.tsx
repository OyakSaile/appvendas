import { Text, SafeAreaView } from "react-native";
import { Container, PageTitle } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export const Content: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <Container>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </Container>
  );
};
