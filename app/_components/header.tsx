import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="Barbearia" height={22} width={180} />
                <Button variant="outline" size="icon">
                    <MenuIcon size={20}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;