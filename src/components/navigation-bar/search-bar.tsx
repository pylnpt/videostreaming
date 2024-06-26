"use client"
import qs from "query-string";
import { useState } from "react";
import { SearchIcon , X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

const SearchBar = () => {
    const router = useRouter();
    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const url = qs.stringifyUrl({
            url: "/search",
            query: {term: value},
        }, {skipEmptyString: true})
        router.push(url);
    }
    const onClear = () => {
        setValue("");
    }

    return (  
        <>
        <form 
            className="relative w-full lg:w-[400px] flex items-center"
            onSubmit={onSubmit}>
            <Input
                value={value}
                onChange={ (e) => setValue(e.target.value) }
                placeholder="Search"
                className="rounded-l-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-navbar-bg text-navbar-font border-searchbar-border"/>
                {value && (
                <X 
                    className="absolute top-2.5 right-14 h-5 w-5 text-mutesd-foreground cursor-pointer hover:opacity-75 transition text-navbar-font"
                    onClick={onClear}/>)}
            <Button 
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-l-none border-searchbar-border bg-navbar-bg">
                <SearchIcon className="h-5 w-5 text-muted-foreground text-navbar-font"/>
            </Button>
        </form>
        </>
    );
}
 
export default SearchBar;