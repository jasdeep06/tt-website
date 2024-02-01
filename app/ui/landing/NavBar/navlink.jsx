import Link from "next/link";

const NavLink = ({text,target_id,path}) => {
    const target = "/#" + target_id;
    const pathTarget = "/" + path;
    return (
        <div className="cursor-pointer p-2 md:p-0">
            <Link href={target_id ? target : pathTarget}>{text}</Link>
        </div>
    )
}

export default NavLink;