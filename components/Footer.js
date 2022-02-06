import Link from "next/link";
export default function Footer(){
    return (
        <>
        <footer class="py-5 bg-dark">
            <div class="container">
                <span id="made-with-love">
                    Made with <i class="fa fa-lg fa-heart pulse"></i> in <a href="https://www.google.com/maps/place/New+York,+NY/@40.6974034,-74.1197635,11z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728" target="_blank">New York</a>
                </span>
                <p class="m-0 text-center text-white">Copyright &copy; Koppelman SLC <script>document.write(new Date().getFullYear())</script></p>
            </div>
        </footer>
        </>
    );
}