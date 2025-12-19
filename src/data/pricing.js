export const filesPlans = [
  {
    id: 'starter',
    title: 'plan_starter_title',
    price: '300',
    storage: '100 GB',
    features: ['feat_file_level', 'feat_30_days', 'feat_email_support'],
    isPopular: false,
  },
  {
    id: 'business',
    title: 'plan_business_title',
    price: '1,350',
    storage: '500 GB',
    features: ['feat_file_level', 'feat_90_days', 'feat_wa_reports'],
    isPopular: true,
    badge: 'badge_popular'
  },
  {
    id: 'pro',
    title: 'plan_pro_title',
    price: '2,700',
    storage: '1 TB',
    features: ['feat_priority_support', 'feat_unlimited_retention', 'feat_wa_reports'],
    isPopular: false,
  },
  {
    id: 'enterprise',
    title: 'plan_enterprise_title',
    price: '5,400',
    storage: '2 TB',
    features: ['feat_acc_mgr', 'feat_restore_assist', 'feat_quarterly_audit'],
    isPopular: false,
  },
];

export const vmPlans = [
  {
    id: 'vm-lite',
    title: 'plan_vm_lite_title',
    price: '625',
    storage: '50 GB',
    features: ['feat_full_vm', 'feat_app_aware'],
    isPopular: false,
  },
  {
    id: 'vm-core',
    title: 'plan_vm_core_title',
    price: '2,000',
    storage: '500 GB',
    features: ['feat_full_vm', 'feat_rapid_restore'],
    isPopular: true,
    badge: 'badge_value'
  },
  {
    id: 'vm-pro',
    title: 'plan_vm_pro_title',
    price: '4,000',
    storage: '1 TB',
    features: ['feat_unlimited_vms', 'feat_dr_drill'],
    isPopular: false,
  },
  {
    id: 'vm-max',
    title: 'plan_vm_max_title',
    price: '8,000',
    storage: '2 TB',
    features: ['feat_dedicated_infra', 'feat_247_support'],
    isPopular: false,
  },
];