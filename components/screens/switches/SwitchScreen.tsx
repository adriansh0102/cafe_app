import { Card } from "@/components/ui/Card";
import { CustomSwitch } from "@/components/ui/customSwitch";
import { CustomView } from "@/components/ui/CustomView";
import { Separator } from "@/components/ui/Separator";
import { useState } from "react";



interface Props {

}
export const SwitchScreen = ({ }: Props) => {
    const [isEnabled, setEnabled] = useState(false);
    const toggleSwitch = () => setEnabled(previousState => !previousState);


    return (
        <CustomView>
            <Card>
                <CustomSwitch
                    isOn={isEnabled}
                    onChange={() => toggleSwitch()}
                    text='Encendido'
                />
                <Separator/>
                <CustomSwitch
                    isOn={isEnabled}
                    onChange={() => toggleSwitch()}
                    text='Encendido'
                />
            </Card>
        </CustomView>
    );
}