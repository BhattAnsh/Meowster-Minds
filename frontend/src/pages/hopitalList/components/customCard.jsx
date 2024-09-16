
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export function CustomCard({name, location, phone, email, website }) {

  return (
    <Card className="w-[full] h-[400px] items-center flex">
      <CardContent className = "flex items-center justify-start p-20 gap-40">
      <Carousel className = "w-1/6 justify-center items-center">
            <CarouselContent className = "w-max items-center">
                <CarouselItem><img className="full" src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg" alt="image" /></CarouselItem>
                <CarouselItem><img className="full" src="https://picsum.photos/seed/picsum/200/300" alt="image" /></CarouselItem>
                <CarouselItem><img className="full" src="https://picsum.photos/seed/picsum/200/300" alt="image" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      <CardHeader className = " p-20 flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-5">
            <div>
                <CardTitle>{name}</CardTitle>
                <br />
                <CardDescription className = "flex flex-row items-center"><i className="material-icons">location_on</i>{location}</CardDescription>
                <br />
                <CardDescription className = "flex flex-row items-center"><i className="material-icons">call</i>{phone}</CardDescription>
                <br />
                <CardDescription className = "flex flex-row items-center"><i className="material-icons">mail</i>{email}</CardDescription>
                <br />
                <CardDescription className = "flex flex-row items-center"><i className="material-icons">language</i>{website}</CardDescription>
            </div>
            <div>
                <CardDescription></CardDescription>
            </div>
        </div>
        <CardFooter className="flex justify-start p-0 ">
            <Button className = "w-1/4 cursor-pointer">Visit</Button>
        </CardFooter>
      </CardHeader>
      </CardContent>
    </Card>
  )
}