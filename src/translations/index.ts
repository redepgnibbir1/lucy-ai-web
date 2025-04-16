
import { navigationTranslations } from './navigation';
import { heroTranslations } from './hero';
import { productsTranslations } from './products';
import { guestCommunicationsTranslations } from './guest-communications';
import { benefitsTranslations } from './benefits';
import { getStartedTranslations } from './get-started';
import { aboutTranslations } from './about';

// Merge all translation objects into one
export const translations = {
  ...navigationTranslations,
  ...heroTranslations,
  ...productsTranslations,
  ...guestCommunicationsTranslations,
  ...benefitsTranslations,
  ...getStartedTranslations,
  ...aboutTranslations
};
