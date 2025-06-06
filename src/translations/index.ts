import { navigationTranslations } from './navigation';
import { heroTranslations } from './hero';
import { productsTranslations } from './products';
import { guestCommunicationsTranslations } from './guest-communications';
import { benefitsTranslations } from './benefits';
import { getStartedTranslations } from './get-started';
import { aboutTranslations } from './about';
import { teamCommunicationsTranslations } from './team-communications';
import { pricingTranslations } from './pricing';
import { footerTranslations } from './footer';
import { contactTranslations } from './contact';

// Merge all translations into a single object
const translations = {
  ...navigationTranslations,
  ...heroTranslations,
  ...productsTranslations,
  ...guestCommunicationsTranslations,
  ...benefitsTranslations,
  ...getStartedTranslations,
  ...aboutTranslations,
  ...teamCommunicationsTranslations,
  ...pricingTranslations,
  ...footerTranslations,
  ...contactTranslations,
};

export default translations;
