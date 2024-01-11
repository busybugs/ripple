declare global {
  namespace App {
    namespace Navbar {
      type Button = {
        title: string;
        icon: ConstructorOfATypedSvelteComponent;
        href: string;
      };
    }
  }
}

export {};
