import Link from "next/link";
import Avatar from "./Avatar";

function Header() {
  return (
    <header>
      <Link href="/">
        <Avatar seed="Support Agent" />

        <div>
          <h1>CodeSmith</h1>
          <h2 className="text-sm">
            Empower Your Conversations with a Customizable AI Assistant
          </h2>
        </div>
      </Link>
    </header>
  );
}

export default Header;
