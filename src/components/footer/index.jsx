import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";





export function Footer() {
    return(
        <div className="flex gap-3 justify-center pt-16 sm:justify-end sm:mt-36">
            <i className="rounded-2xl border p-2 text-white"><FaFacebookF /></i>
            <i className="rounded-2xl border p-2 text-white"><FaTwitter /></i>
            <i className="rounded-2xl border p-2 text-white"><FaInstagram /></i>
        </div>
    )
}