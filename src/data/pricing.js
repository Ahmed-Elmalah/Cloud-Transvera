export const filesPlans = [
  {
    id: 'starter',
    title: 'Starter',
    price: '300',
    storage: '100 GB',
    features: ['File Level Backup', '30 Days Retention', 'Email Support'],
    isPopular: false,
  },
  {
    id: 'business',
    title: 'Business',
    price: '1,350',
    storage: '500 GB',
    features: ['File Level Backup', '90 Days Retention', 'WhatsApp Reports'],
    isPopular: true, // عشان نميز الكارت ده
    badge: 'Most Popular'
  },
  {
    id: 'pro',
    title: 'Pro',
    price: '2,700',
    storage: '1 TB',
    features: ['Priority Support', 'Unlimited Retention', 'WhatsApp Reports'],
    isPopular: false,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: '5,400',
    storage: '2 TB',
    features: ['Dedicated Account Mgr', 'Restore Assistance', 'Quarterly Audit'],
    isPopular: false,
  },
];

export const vmPlans = [
  {
    id: 'vm-lite',
    title: 'VM Lite',
    price: '625',
    storage: '50 GB',
    features: ['Full VM Backup', 'Application Aware'],
    isPopular: false,
  },
  {
    id: 'vm-core',
    title: 'VM Core',
    price: '2,000',
    storage: '500 GB',
    features: ['Full VM Backup', 'Rapid Restore'],
    isPopular: true,
    badge: 'Best Value'
  },
  {
    id: 'vm-pro',
    title: 'VM Pro',
    price: '4,000',
    storage: '1 TB',
    features: ['Unlimited VMs', 'Disaster Recovery Drill'],
    isPopular: false,
  },
  {
    id: 'vm-max',
    title: 'VM Max',
    price: '8,000',
    storage: '2 TB',
    features: ['Dedicated Infrastructure', '24/7 Priority Support'],
    isPopular: false,
  },
];