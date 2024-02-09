declare global {
  namespace App {
    namespace Navbar {
      type Button = {
        title: string;
        icon: ConstructorOfATypedSvelteComponent;
        href: string;
      };
    }

    namespace Store {
      type Item = import("$lib/store").Item;
      type Properties = import("$lib/store").Properties;
    }
  }
}

export {};
