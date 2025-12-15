import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-secondary text-foreground py-16 md:py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Section */}
        <div className="mb-8">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">🚌</span>
            </div>
            <span className="text-3xl font-bold text-red-600">킹버스</span>
          </div>

          {/* Company Information */}
          <div className="space-y-2 text-foreground">
            <p className="text-lg">
              <span className="font-semibold">(주)킹버스</span> | 대표이사
              김형주
            </p>
            <p className="text-base">
              <span className="font-semibold">TEL</span> 1522-9821{" "}
              <span className="font-semibold">FAX</span> 031-295-7151
            </p>
            <p className="text-base">
              <span className="font-semibold">주소</span> 수원시 권선구
              매송고색로 804번길 224-46
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Links Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 pr-24">
          {/* Links on the left */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              이용약관
            </a>
            <span className="text-muted-foreground/50">|</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300 font-semibold"
            >
              개인정보처리방침
            </a>
            <span className="text-muted-foreground/50">|</span>
            <span>원더저 버스 대절프로그램 킹버스</span>
            <span className="text-muted-foreground/50">|</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              킹버스 고객센터
            </a>
            <span className="text-muted-foreground/50">|</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              제휴제안
            </a>
          </div>

          {/* Social Media Icons on the right */}
          <div className="flex items-center gap-4">
            <a
              href="https://blog.naver.com/kingbus7111/222838534452"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-300 shadow-sm"
              aria-label="네이버"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"
                  fill="#00C73C"
                />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@kingbus8874"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-300 shadow-sm"
              aria-label="유튜브"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="#FF0000"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/king__bus/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-300 shadow-sm"
              aria-label="인스타그램"
            >
              <Instagram className="w-5 h-5 text-pink-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
