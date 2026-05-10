import ThemeChanger from "../ThemeChanger";
import Translation from "../Translation";
export default function Cta(){
    return(
        <div className="flex items-center gap-2">
            <ThemeChanger />
            <Translation />
        </div>
    )
}