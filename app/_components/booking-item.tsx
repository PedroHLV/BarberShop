import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";


const BookinItem = () => {
    return ( 
        <Card>
            <CardContent className="p-5">
                <div>
                    <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D]">Confirmado</Badge>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BookinItem;