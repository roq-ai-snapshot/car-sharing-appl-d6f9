interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Edit personal information', 'Book a car', 'Write a review', 'Report an issue'],
  ownerAbilities: [
    'Manage company information',
    'Manage car fleet',
    'View booking details',
    'View reports and reviews',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/321beedc-8f0f-4fc5-9fa0-d1af7cb89edb',
};
