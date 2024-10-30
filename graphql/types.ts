import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AcceptWorkspaceInviteInput = {
  inviteId: Scalars['ID']['input'];
};

export type AcceptWorkspaceInviteOutput = {
  __typename: 'AcceptWorkspaceInviteOutput';
  error?: Maybe<MutationError>;
  invite?: Maybe<WorkspaceInvite>;
};

export type Actor = CustomerActor | DeletedCustomerActor | MachineUserActor | SystemActor | UserActor;

export type AddAdditionalAssigneesInput = {
  machineUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  threadId: Scalars['ID']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type AddAdditionalAssigneesOutput = {
  __typename: 'AddAdditionalAssigneesOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type AddCustomerToCustomerGroupsInput = {
  customerGroupIdentifiers: Array<CustomerGroupIdentifier>;
  customerId: Scalars['ID']['input'];
};

export type AddCustomerToCustomerGroupsOutput = {
  __typename: 'AddCustomerToCustomerGroupsOutput';
  customerGroupMemberships?: Maybe<Array<CustomerGroupMembership>>;
  error?: Maybe<MutationError>;
};

export type AddCustomerToTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type AddCustomerToTenantsOutput = {
  __typename: 'AddCustomerToTenantsOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type AddLabelsInput = {
  labelTypeIds: Array<Scalars['ID']['input']>;
  threadId: Scalars['ID']['input'];
};

export type AddLabelsOutput = {
  __typename: 'AddLabelsOutput';
  error?: Maybe<MutationError>;
  labels: Array<Label>;
};

export type AddMembersToTierInput = {
  memberIdentifiers: Array<TierMemberIdentifierInput>;
  tierIdentifier: TierIdentifierInput;
};

export type AddMembersToTierOutput = {
  __typename: 'AddMembersToTierOutput';
  error?: Maybe<MutationError>;
  memberships: Array<TierMembership>;
};

export type AddUserToActiveBillingRotaInput = {
  userId: Scalars['ID']['input'];
};

export type AddUserToActiveBillingRotaOutput = {
  __typename: 'AddUserToActiveBillingRotaOutput';
  billingRota?: Maybe<BillingRota>;
  error?: Maybe<MutationError>;
};

export type AddWorkspaceAlternateSupportEmailAddressInput = {
  alternateSupportEmailAddress: Scalars['String']['input'];
};

export type AddWorkspaceAlternateSupportEmailAddressOutput = {
  __typename: 'AddWorkspaceAlternateSupportEmailAddressOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type ApiKey = {
  __typename: 'ApiKey';
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<Actor>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  permissions: Array<Scalars['String']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ApiKeyConnection = {
  __typename: 'ApiKeyConnection';
  edges: Array<ApiKeyEdge>;
  pageInfo: PageInfo;
};

export type ApiKeyEdge = {
  __typename: 'ApiKeyEdge';
  cursor: Scalars['String']['output'];
  node: ApiKey;
};

export type ArchiveLabelTypeInput = {
  labelTypeId: Scalars['ID']['input'];
};

export type ArchiveLabelTypeOutput = {
  __typename: 'ArchiveLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type AssignRolesToUserInput = {
  /** @deprecated Use roleKey instead. */
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  roleKey?: InputMaybe<RoleKey>;
  userId: Scalars['ID']['input'];
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type AssignRolesToUserOutput = {
  __typename: 'AssignRolesToUserOutput';
  error?: Maybe<MutationError>;
};

export type AssignThreadInput = {
  machineUserId?: InputMaybe<Scalars['ID']['input']>;
  threadId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AssignThreadOutput = {
  __typename: 'AssignThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type Attachment = {
  __typename: 'Attachment';
  createdAt: DateTime;
  createdBy: Actor;
  fileExtension?: Maybe<Scalars['String']['output']>;
  fileMimeType: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  fileSize: FileSize;
  id: Scalars['ID']['output'];
  type: AttachmentType;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type AttachmentDownloadUrl = {
  __typename: 'AttachmentDownloadUrl';
  attachment: Attachment;
  downloadUrl: Scalars['String']['output'];
  expiresAt: DateTime;
};

export enum AttachmentType {
  Chat = 'CHAT',
  CustomTimelineEntry = 'CUSTOM_TIMELINE_ENTRY',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK',
  ThreadDiscussion = 'THREAD_DISCUSSION'
}

export type AttachmentUploadUrl = {
  __typename: 'AttachmentUploadUrl';
  attachment: Attachment;
  expiresAt: DateTime;
  uploadFormData: Array<UploadFormData>;
  uploadFormUrl: Scalars['String']['output'];
};

export enum AttachmentVirusScanResult {
  /** The attachment is clean and safe to download. */
  Clean = 'CLEAN',
  /** The virus scan failed. */
  Failed = 'FAILED',
  /** The attachment is infected and should not be downloaded. */
  Infected = 'INFECTED',
  /** The virus scan is still pending. */
  Pending = 'PENDING'
}

export type Autoresponder = {
  __typename: 'Autoresponder';
  conditions: Array<AutoresponderCondition>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  markdownContent?: Maybe<Scalars['String']['output']>;
  messageSources: Array<AutoresponderMessageSource>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  responseDelaySeconds: Scalars['Int']['output'];
  textContent: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type AutoresponderBusinessHoursCondition = {
  __typename: 'AutoresponderBusinessHoursCondition';
  isOutsideBusinessHours: Scalars['Boolean']['output'];
};

export type AutoresponderCondition = AutoresponderBusinessHoursCondition | AutoresponderSupportEmailsCondition | AutoresponderTierCondition;

export type AutoresponderConditionInput = {
  isOutsideBusinessHours?: InputMaybe<Scalars['Boolean']['input']>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  tierId?: InputMaybe<Scalars['ID']['input']>;
};

export type AutoresponderConnection = {
  __typename: 'AutoresponderConnection';
  edges: Array<AutoresponderEdge>;
  pageInfo: PageInfo;
};

export type AutoresponderEdge = {
  __typename: 'AutoresponderEdge';
  cursor: Scalars['String']['output'];
  node: Autoresponder;
};

export enum AutoresponderMessageSource {
  Api = 'API',
  Chat = 'CHAT',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type AutoresponderOrderInput = {
  autoresponderId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type AutoresponderSupportEmailsCondition = {
  __typename: 'AutoresponderSupportEmailsCondition';
  supportEmailAddresses: Array<Scalars['String']['output']>;
};

export type AutoresponderTierCondition = {
  __typename: 'AutoresponderTierCondition';
  tierId: Scalars['ID']['output'];
};

export type BeforeBreachAction = {
  __typename: 'BeforeBreachAction';
  beforeBreachMinutes: Scalars['Int']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type BeforeBreachActionInput = {
  beforeBreachMinutes: Scalars['Int']['input'];
};

export type BillingFeatureEntitlement = {
  feature: FeatureKey;
  isEntitled: Scalars['Boolean']['output'];
};

export enum BillingInterval {
  /** @deprecated Use BillingIntervalUnit.MONTH instead */
  Month = 'MONTH',
  /** @deprecated Use BillingIntervalUnit.YEAR instead */
  Year = 'YEAR'
}

export enum BillingIntervalUnit {
  Month = 'MONTH',
  Year = 'YEAR'
}

export type BillingPlan = {
  __typename: 'BillingPlan';
  description: Scalars['String']['output'];
  features: Array<Scalars['String']['output']>;
  highlightedLabel?: Maybe<Scalars['String']['output']>;
  isSelfCheckoutEligible: Scalars['Boolean']['output'];
  key: BillingPlanKey;
  /** @deprecated Use prices instead */
  monthlyPrice?: Maybe<Price>;
  name: Scalars['String']['output'];
  prices: Array<RecurringPrice>;
  /** @deprecated Use prices instead */
  yearlyPrice?: Maybe<Price>;
};

export type BillingPlanChangePreview = {
  __typename: 'BillingPlanChangePreview';
  earliestEffectiveAt: DateTime;
  immediateCost: Price;
};

export type BillingPlanConnection = {
  __typename: 'BillingPlanConnection';
  edges: Array<BillingPlanEdge>;
  pageInfo: PageInfo;
};

export type BillingPlanEdge = {
  __typename: 'BillingPlanEdge';
  cursor: Scalars['String']['output'];
  node: BillingPlan;
};

export enum BillingPlanKey {
  Evaluate = 'EVALUATE',
  Grow = 'GROW',
  Launch = 'LAUNCH',
  Legacy = 'LEGACY',
  Scale = 'SCALE'
}

export type BillingRota = {
  __typename: 'BillingRota';
  offRotaUserIds: Array<Scalars['ID']['output']>;
  onRotaUserIds: Array<Scalars['ID']['output']>;
};

export enum BillingSeatType {
  /** @deprecated Field no longer supported */
  EngRota = 'ENG_ROTA',
  /** @deprecated Field no longer supported */
  Member = 'MEMBER',
  /** @deprecated Field no longer supported */
  Viewer = 'VIEWER'
}

export type BillingSubscription = {
  __typename: 'BillingSubscription';
  cancelsAt?: Maybe<DateTime>;
  endedAt?: Maybe<DateTime>;
  entitlements: Array<BillingFeatureEntitlement>;
  /** @deprecated Field no longer supported */
  interval: BillingInterval;
  planKey: BillingPlanKey;
  planName: Scalars['String']['output'];
  status: BillingSubscriptionStatus;
  trialEndsAt?: Maybe<DateTime>;
};

export enum BillingSubscriptionStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type BooleanInput = {
  value: Scalars['Boolean']['input'];
};

/** A boolean setting */
export type BooleanSetting = {
  __typename: 'BooleanSetting';
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  booleanValue: Scalars['Boolean']['output'];
  /** The setting code. */
  code: Scalars['String']['output'];
  /** The scope of the setting. */
  scope: SettingScope;
};

export type BreachAction = BeforeBreachAction;

export type BreachActionInput = {
  beforeBreachAction?: InputMaybe<BeforeBreachActionInput>;
};

export type BulkUpsertThreadFieldResult = {
  __typename: 'BulkUpsertThreadFieldResult';
  result?: Maybe<UpsertResult>;
  threadField?: Maybe<ThreadField>;
};

export type BulkUpsertThreadFieldsInput = {
  inputs: Array<UpsertThreadFieldInput>;
};

export type BulkUpsertThreadFieldsOutput = {
  __typename: 'BulkUpsertThreadFieldsOutput';
  error?: Maybe<MutationError>;
  results: Array<BulkUpsertThreadFieldResult>;
};

/**
 * Represents the times in which you are open for business during a week. If a day is null, it means that day you are not
 * open for business.
 */
export type BusinessHours = {
  __typename: 'BusinessHours';
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  weekDays: BusinessHoursWeekDays;
};

export type BusinessHoursSlot = {
  __typename: 'BusinessHoursSlot';
  closesAt: Scalars['String']['output'];
  opensAt: Scalars['String']['output'];
  timezone: Timezone;
  weekday: WeekDay;
};

export type BusinessHoursSlotInput = {
  closesAt: Scalars['String']['input'];
  opensAt: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
  weekday: WeekDay;
};

export type BusinessHoursWeekDay = {
  __typename: 'BusinessHoursWeekDay';
  endTime: Time;
  startTime: Time;
};

export type BusinessHoursWeekDayInput = {
  /** The time you close for business on this day as an UTC ISO time. For example: 17:00Z . */
  endTime: Scalars['String']['input'];
  /** The time you open for business on this day as an UTC ISO time. For example: 09:00Z . */
  startTime: Scalars['String']['input'];
};

export type BusinessHoursWeekDays = {
  __typename: 'BusinessHoursWeekDays';
  friday?: Maybe<BusinessHoursWeekDay>;
  monday?: Maybe<BusinessHoursWeekDay>;
  saturday?: Maybe<BusinessHoursWeekDay>;
  sunday?: Maybe<BusinessHoursWeekDay>;
  thursday?: Maybe<BusinessHoursWeekDay>;
  tuesday?: Maybe<BusinessHoursWeekDay>;
  wednesday?: Maybe<BusinessHoursWeekDay>;
};

/** Represents the times in which you are open for business during a week. Only provide the days you are open for business. */
export type BusinessHoursWeekDaysInput = {
  friday?: InputMaybe<BusinessHoursWeekDayInput>;
  monday?: InputMaybe<BusinessHoursWeekDayInput>;
  saturday?: InputMaybe<BusinessHoursWeekDayInput>;
  sunday?: InputMaybe<BusinessHoursWeekDayInput>;
  thursday?: InputMaybe<BusinessHoursWeekDayInput>;
  tuesday?: InputMaybe<BusinessHoursWeekDayInput>;
  wednesday?: InputMaybe<BusinessHoursWeekDayInput>;
};

export type CalculateRoleChangeCostInput = {
  roleKey: RoleKey;
  userId?: InputMaybe<Scalars['ID']['input']>;
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type CalculateRoleChangeCostOutput = {
  __typename: 'CalculateRoleChangeCostOutput';
  error?: Maybe<MutationError>;
  roleChangeCost?: Maybe<RoleChangeCost>;
};

export type ChangeBillingPlanInput = {
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  planKey: BillingPlanKey;
};

export type ChangeBillingPlanOutput = {
  __typename: 'ChangeBillingPlanOutput';
  error?: Maybe<MutationError>;
};

export type ChangeThreadPriorityInput = {
  priority: Scalars['Int']['input'];
  threadId: Scalars['ID']['input'];
};

export type ChangeThreadPriorityOutput = {
  __typename: 'ChangeThreadPriorityOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export enum ChangeType {
  Added = 'ADDED',
  Removed = 'REMOVED',
  Updated = 'UPDATED'
}

export type ChangeUserStatusInput = {
  status: UserStatus;
  userId: Scalars['ID']['input'];
};

export type ChangeUserStatusOutput = {
  __typename: 'ChangeUserStatusOutput';
  error?: Maybe<MutationError>;
  user?: Maybe<User>;
};

export type Chat = {
  __typename: 'Chat';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  customerReadAt?: Maybe<DateTime>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ChatApp = {
  __typename: 'ChatApp';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ChatAppConnection = {
  __typename: 'ChatAppConnection';
  edges: Array<ChatAppEdge>;
  pageInfo: PageInfo;
};

export type ChatAppEdge = {
  __typename: 'ChatAppEdge';
  cursor: Scalars['String']['output'];
  node: ChatApp;
};

export type ChatAppHiddenSecret = {
  __typename: 'ChatAppHiddenSecret';
  chatAppId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ChatAppSecret = {
  __typename: 'ChatAppSecret';
  chatAppId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  secret: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ChatEntry = {
  __typename: 'ChatEntry';
  attachments: Array<Attachment>;
  chatId: Scalars['ID']['output'];
  customerReadAt?: Maybe<DateTime>;
  text?: Maybe<Scalars['String']['output']>;
};

export type CompaniesFilter = {
  companyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Query to search for companies. */
export type CompaniesSearchQuery = {
  /**
   * The term to search for. It must be at least 2 characters long. The search is case-insensitive on these two fields:
   * - the company name (partial match)
   * - the company domain name (partial match)
   */
  term: Scalars['String']['input'];
};

export type Company = {
  __typename: 'Company';
  createdAt: DateTime;
  createdBy: InternalActor;
  domainName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  threadChannelAssociations: Array<ThreadChannelAssociation>;
  tier?: Maybe<Tier>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type CompanyLogoUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type CompanyConnection = {
  __typename: 'CompanyConnection';
  edges: Array<CompanyEdge>;
  pageInfo: PageInfo;
};

export type CompanyEdge = {
  __typename: 'CompanyEdge';
  cursor: Scalars['String']['output'];
  node: Company;
};

export type CompanyIdentifierInput = {
  /** The domain name of the company (e.g. plain.com). Alternatively, you can provide a full URL (e.g. https://www.plain.com) and we will do our best to extract the domain name. */
  companyDomainName?: InputMaybe<Scalars['String']['input']>;
  /** Plain's internal identifier for the company. */
  companyId?: InputMaybe<Scalars['ID']['input']>;
};

export type CompanySearchResult = {
  __typename: 'CompanySearchResult';
  company: Company;
};

export type CompanySearchResultConnection = {
  __typename: 'CompanySearchResultConnection';
  edges: Array<CompanySearchResultEdge>;
  pageInfo: PageInfo;
};

export type CompanySearchResultEdge = {
  __typename: 'CompanySearchResultEdge';
  cursor: Scalars['String']['output'];
  node: CompanySearchResult;
};

export type CompanyTierMembership = {
  __typename: 'CompanyTierMembership';
  companyId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  tierId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CompleteJiraAuthorizationInput = {
  refreshToken: Scalars['String']['input'];
  siteId: Scalars['String']['input'];
};

export type CompleteServiceAuthorizationInput = {
  jira?: InputMaybe<CompleteJiraAuthorizationInput>;
  serviceAuthorizationId: Scalars['ID']['input'];
};

export type CompleteServiceAuthorizationOutput = {
  __typename: 'CompleteServiceAuthorizationOutput';
  error?: Maybe<MutationError>;
  serviceAuthorization?: Maybe<ServiceAuthorization>;
};

export type ComponentBadge = {
  __typename: 'ComponentBadge';
  badgeColor?: Maybe<ComponentBadgeColor>;
  badgeLabel: Scalars['String']['output'];
};

export enum ComponentBadgeColor {
  Blue = 'BLUE',
  Green = 'GREEN',
  Grey = 'GREY',
  Red = 'RED',
  Yellow = 'YELLOW'
}

export type ComponentBadgeInput = {
  badgeColor?: InputMaybe<ComponentBadgeColor>;
  badgeLabel: Scalars['String']['input'];
};

export type ComponentContainer = {
  __typename: 'ComponentContainer';
  containerContent: Array<ComponentContainerContent>;
};

export type ComponentContainerContent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

export type ComponentContainerContentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentContainerInput = {
  containerContent: Array<ComponentContainerContentInput>;
};

export type ComponentCopyButton = {
  __typename: 'ComponentCopyButton';
  copyButtonTooltipLabel?: Maybe<Scalars['String']['output']>;
  copyButtonValue: Scalars['String']['output'];
};

export type ComponentCopyButtonInput = {
  copyButtonTooltipLabel?: InputMaybe<Scalars['String']['input']>;
  copyButtonValue: Scalars['String']['input'];
};

export type ComponentDivider = {
  __typename: 'ComponentDivider';
  dividerSpacingSize?: Maybe<ComponentDividerSpacingSize>;
  /** @deprecated use dividerSpacingSize instead */
  spacingSize?: Maybe<ComponentDividerSpacingSize>;
};

export type ComponentDividerInput = {
  dividerSpacingSize?: InputMaybe<ComponentDividerSpacingSize>;
  /** @deprecated use dividerSpacingSize instead */
  spacingSize?: InputMaybe<ComponentDividerSpacingSize>;
};

export enum ComponentDividerSpacingSize {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

export type ComponentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentContainer?: InputMaybe<ComponentContainerInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentLinkButton = {
  __typename: 'ComponentLinkButton';
  /** @deprecated use linkButtonLabel instead */
  label: Scalars['String']['output'];
  linkButtonLabel: Scalars['String']['output'];
  linkButtonUrl: Scalars['String']['output'];
  /** @deprecated use linkButtonUrl instead */
  url: Scalars['String']['output'];
};

export type ComponentLinkButtonInput = {
  /** @deprecated use linkButtonLabel instead */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Required input, will be made required after deprecated fields are removed. */
  linkButtonLabel?: InputMaybe<Scalars['String']['input']>;
  /** Required input, will be made required after deprecated fields are removed. */
  linkButtonUrl?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use linkButtonUrl instead */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPlainText = {
  __typename: 'ComponentPlainText';
  plainText: Scalars['String']['output'];
  plainTextColor?: Maybe<ComponentPlainTextColor>;
  plainTextSize?: Maybe<ComponentPlainTextSize>;
};

export enum ComponentPlainTextColor {
  Error = 'ERROR',
  Muted = 'MUTED',
  Normal = 'NORMAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export type ComponentPlainTextInput = {
  plainText: Scalars['String']['input'];
  plainTextColor?: InputMaybe<ComponentPlainTextColor>;
  plainTextSize?: InputMaybe<ComponentPlainTextSize>;
};

export enum ComponentPlainTextSize {
  L = 'L',
  M = 'M',
  S = 'S'
}

export type ComponentRow = {
  __typename: 'ComponentRow';
  rowAsideContent: Array<ComponentRowContent>;
  rowMainContent: Array<ComponentRowContent>;
};

export type ComponentRowContent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentSpacer | ComponentText;

export type ComponentRowContentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentRowInput = {
  rowAsideContent: Array<ComponentRowContentInput>;
  rowMainContent: Array<ComponentRowContentInput>;
};

export type ComponentSpacer = {
  __typename: 'ComponentSpacer';
  /** @deprecated Use spacerSize instead, which has the same type */
  size: ComponentSpacerSize;
  spacerSize: ComponentSpacerSize;
};

export type ComponentSpacerInput = {
  /** @deprecated user spacerSize instead */
  size?: InputMaybe<ComponentSpacerSize>;
  /** Required input, will be made required after deprecated fields are removed. */
  spacerSize?: InputMaybe<ComponentSpacerSize>;
};

export enum ComponentSpacerSize {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

export type ComponentText = {
  __typename: 'ComponentText';
  /** @deprecated Use textColor instead, which has the same type */
  color?: Maybe<ComponentTextColor>;
  /** @deprecated Use textSize instead, which has the same type */
  size?: Maybe<ComponentTextSize>;
  text: Scalars['String']['output'];
  textColor?: Maybe<ComponentTextColor>;
  textSize?: Maybe<ComponentTextSize>;
};

export enum ComponentTextColor {
  Error = 'ERROR',
  Muted = 'MUTED',
  Normal = 'NORMAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export type ComponentTextInput = {
  /** @deprecated use textColor instead */
  color?: InputMaybe<ComponentTextColor>;
  /** @deprecated use textSize instead */
  size?: InputMaybe<ComponentTextSize>;
  text: Scalars['String']['input'];
  textColor?: InputMaybe<ComponentTextColor>;
  textSize?: InputMaybe<ComponentTextSize>;
};

export enum ComponentTextSize {
  L = 'L',
  M = 'M',
  S = 'S'
}

export type ConnectedSlackChannel = {
  __typename: 'ConnectedSlackChannel';
  channelType: ConnectedSlackChannelType;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  slackChannelId: Scalars['String']['output'];
  slackTeamId: Scalars['String']['output'];
  threadChannelAssociations: Array<SlackThreadChannelAssociation>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ConnectedSlackChannelConnection = {
  __typename: 'ConnectedSlackChannelConnection';
  edges: Array<ConnectedSlackChannelEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ConnectedSlackChannelEdge = {
  __typename: 'ConnectedSlackChannelEdge';
  cursor: Scalars['String']['output'];
  node: ConnectedSlackChannel;
};

export enum ConnectedSlackChannelType {
  /** A channel that Plain tracks for customer support requests. */
  Customer = 'CUSTOMER',
  /** A channel that Plain tracks for internal team discussions. */
  Discussion = 'DISCUSSION'
}

export type ConnectedSlackChannelsFilter = {
  channelTypes?: InputMaybe<Array<ConnectedSlackChannelType>>;
  isEnabled?: InputMaybe<BooleanInput>;
  slackTeamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateApiKeyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  machineUserId: Scalars['ID']['input'];
  permissions: Array<Scalars['String']['input']>;
};

export type CreateApiKeyOutput = {
  __typename: 'CreateApiKeyOutput';
  apiKey?: Maybe<ApiKey>;
  apiKeySecret?: Maybe<Scalars['String']['output']>;
  error?: Maybe<MutationError>;
};

export type CreateAttachmentDownloadUrlInput = {
  attachmentId: Scalars['ID']['input'];
};

export type CreateAttachmentDownloadUrlOutput = {
  __typename: 'CreateAttachmentDownloadUrlOutput';
  attachmentDownloadUrl?: Maybe<AttachmentDownloadUrl>;
  /** The result of the virus scan on this attachment. If this is null, it means that your workspace does not have virus scan checks enabled. */
  attachmentVirusScanResult?: Maybe<AttachmentVirusScanResult>;
  error?: Maybe<MutationError>;
};

export type CreateAttachmentUploadUrlInput = {
  attachmentType: AttachmentType;
  customerId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
  fileSizeBytes: Scalars['Int']['input'];
};

export type CreateAttachmentUploadUrlOutput = {
  __typename: 'CreateAttachmentUploadUrlOutput';
  attachmentUploadUrl?: Maybe<AttachmentUploadUrl>;
  error?: Maybe<MutationError>;
};

export type CreateAutoresponderInput = {
  conditions: Array<AutoresponderConditionInput>;
  isEnabled: Scalars['Boolean']['input'];
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  messageSources: Array<AutoresponderMessageSource>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  responseDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
  textContent: Scalars['String']['input'];
};

export type CreateAutoresponderOutput = {
  __typename: 'CreateAutoresponderOutput';
  autoresponder?: Maybe<Autoresponder>;
  error?: Maybe<MutationError>;
};

export type CreateBillingPortalSessionOutput = {
  __typename: 'CreateBillingPortalSessionOutput';
  billingPortalSessionUrl?: Maybe<Scalars['String']['output']>;
  error?: Maybe<MutationError>;
};

export type CreateChatAppInput = {
  name: Scalars['String']['input'];
};

export type CreateChatAppOutput = {
  __typename: 'CreateChatAppOutput';
  chatApp?: Maybe<ChatApp>;
  error?: Maybe<MutationError>;
};

export type CreateChatAppSecretInput = {
  chatAppId: Scalars['ID']['input'];
};

export type CreateChatAppSecretOutput = {
  __typename: 'CreateChatAppSecretOutput';
  chatAppSecret?: Maybe<ChatAppSecret>;
  error?: Maybe<MutationError>;
};

export type CreateCheckoutSessionInput = {
  /** @deprecated Use intervalUnit instead */
  interval?: InputMaybe<BillingInterval>;
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  plan: BillingPlanKey;
};

export type CreateCheckoutSessionOutput = {
  __typename: 'CreateCheckoutSessionOutput';
  error?: Maybe<MutationError>;
  sessionClientSecret?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type to create a new customer card config.
 *
 * By default new customer cards will have an ordering of 100000 (to place them at the bottom).
 */
export type CreateCustomerCardConfigInput = {
  /** An array of headers name-value pairs (maximum length of array: 20). */
  apiHeaders: Array<CustomerCardConfigApiHeaderInput>;
  /** The URL from which this card should be loaded (must start with `https://` and be a valid URL, max length: 600 characters). */
  apiUrl: Scalars['String']['input'];
  /** The default time the card should be cached for if no TTL is provided in the card response. (minimum: 15 seconds, maximum: 1 year or  31,536,000 seconds). */
  defaultTimeToLiveSeconds: Scalars['Int']['input'];
  /** The key of the card (must be unique in a workspace, max length: 500 characters, must match regex: `[a-zA-Z0-9_-]+`). */
  key: Scalars['String']['input'];
  /** The title of the card (max length: 500 characters). */
  title: Scalars['String']['input'];
};

export type CreateCustomerCardConfigOutput = {
  __typename: 'CreateCustomerCardConfigOutput';
  /** The created customer card config. */
  customerCardConfig?: Maybe<CustomerCardConfig>;
  error?: Maybe<MutationError>;
};

export type CreateCustomerEventInput = {
  /** The components used to create the event's contents. */
  components: Array<EventComponentInput>;
  /** The customer id of the customer that the event is for. */
  customerIdentifier: CustomerIdentifierInput;
  /** The external ID of this event. You can use this field to store your own unique identifier for this event. This must be unique. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** The title of the event. */
  title: Scalars['String']['input'];
};

export type CreateCustomerEventOutput = {
  __typename: 'CreateCustomerEventOutput';
  customerEvent?: Maybe<CustomerEvent>;
  error?: Maybe<MutationError>;
};

export type CreateCustomerGroupInput = {
  color: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCustomerGroupOutput = {
  __typename: 'CreateCustomerGroupOutput';
  customerGroup?: Maybe<CustomerGroup>;
  error?: Maybe<MutationError>;
};

export type CreateEmailPreviewUrlInput = {
  customerId: Scalars['ID']['input'];
  emailId: Scalars['ID']['input'];
};

export type CreateEmailPreviewUrlOutput = {
  __typename: 'CreateEmailPreviewUrlOutput';
  emailPreviewUrl?: Maybe<EmailPreviewUrl>;
  error?: Maybe<MutationError>;
};

export type CreateIndexedDocumentInput = {
  url: Scalars['String']['input'];
};

export type CreateIndexedDocumentOutput = {
  __typename: 'CreateIndexedDocumentOutput';
  error?: Maybe<MutationError>;
  indexedDocument?: Maybe<IndexedDocument>;
};

export type CreateLabelTypeInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateLabelTypeOutput = {
  __typename: 'CreateLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type CreateMachineUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  publicName: Scalars['String']['input'];
};

export type CreateMachineUserOutput = {
  __typename: 'CreateMachineUserOutput';
  error?: Maybe<MutationError>;
  machineUser?: Maybe<MachineUser>;
};

export type CreateMyLinearIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateMyLinearIntegrationOutput = {
  __typename: 'CreateMyLinearIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserLinearIntegration>;
};

export type CreateMyMsTeamsIntegrationInput = {
  authCode: Scalars['ID']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateMyMsTeamsIntegrationOutput = {
  __typename: 'CreateMyMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserMsTeamsIntegration>;
};

export type CreateMySlackIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateMySlackIntegrationOutput = {
  __typename: 'CreateMySlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserSlackIntegration>;
};

export type CreateNoteInput = {
  customerId: Scalars['ID']['input'];
  markdown?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateNoteOutput = {
  __typename: 'CreateNoteOutput';
  error?: Maybe<MutationError>;
  note?: Maybe<Note>;
};

export type CreateServiceLevelAgreementInput = {
  serviceLevelAgreement: ServiceLevelAgreementInput;
  tierId: Scalars['ID']['input'];
};

export type CreateServiceLevelAgreementOutput = {
  __typename: 'CreateServiceLevelAgreementOutput';
  error?: Maybe<MutationError>;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

export type CreateSnippetInput = {
  markdown?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type CreateSnippetOutput = {
  __typename: 'CreateSnippetOutput';
  error?: Maybe<MutationError>;
  snippet?: Maybe<Snippet>;
};

/** Only one of the fields can be set. */
export type CreateThreadAssignedToInput = {
  machineUserId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateThreadChannelAssociationInput = {
  companyIdentifier: CompanyIdentifierInput;
  connectedSlackChannelId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateThreadChannelAssociationOutput = {
  __typename: 'CreateThreadChannelAssociationOutput';
  error?: Maybe<MutationError>;
  threadChannelAssociation?: Maybe<ThreadChannelAssociation>;
};

export type CreateThreadDiscussionInput = {
  connectedSlackChannelId: Scalars['ID']['input'];
  markdownContent: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};

export type CreateThreadDiscussionOutput = {
  __typename: 'CreateThreadDiscussionOutput';
  error?: Maybe<MutationError>;
  threadDiscussion?: Maybe<ThreadDiscussion>;
};

export type CreateThreadEventInput = {
  /** The components used to create the event's contents. */
  components: Array<EventComponentInput>;
  /** The external ID of this event. You can use this field to store your own unique identifier for this event. This must be unique. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** The thread id of the thread that the event is for. */
  threadId: Scalars['ID']['input'];
  /** The title of the event. */
  title: Scalars['String']['input'];
};

export type CreateThreadEventOutput = {
  __typename: 'CreateThreadEventOutput';
  error?: Maybe<MutationError>;
  threadEvent?: Maybe<ThreadEvent>;
};

export type CreateThreadFieldOnThreadInput = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  stringValue?: InputMaybe<Scalars['String']['input']>;
  type: ThreadFieldSchemaType;
};

export type CreateThreadFieldSchemaInput = {
  defaultBooleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultStringValue?: InputMaybe<Scalars['String']['input']>;
  dependsOnThreadField?: InputMaybe<DependsOnThreadFieldInput>;
  description: Scalars['String']['input'];
  enumValues: Array<Scalars['String']['input']>;
  isAiAutoFillEnabled: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
  label: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  type: ThreadFieldSchemaType;
};

export type CreateThreadFieldSchemaOutput = {
  __typename: 'CreateThreadFieldSchemaOutput';
  error?: Maybe<MutationError>;
  threadFieldSchema?: Maybe<ThreadFieldSchema>;
};

export type CreateThreadInput = {
  /** User or machine user this thread should be assigned to. */
  assignedTo?: InputMaybe<CreateThreadAssignedToInput>;
  /** An array of attachments for the first timeline entry in the thread. */
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The components used to create the first timeline entry in the thread. */
  components: Array<ComponentInput>;
  /** The identifier of the customer being either the existing customer ID, the customer's email address or and external ID. */
  customerIdentifier: CustomerIdentifierInput;
  /**
   * The optional description for this thread. This is used to display a preview of the thread in the UI.
   * If not provided, we will automatically infer it from the components you provided.
   */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The external ID of this thread. You can use this field to store your own unique identifier for this thread. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** An array of label types to attach to the thread upon creation. */
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent, defaults to 2 (normal). */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** A thread may be assigned to a specific tenant. */
  tenantIdentifier?: InputMaybe<TenantIdentifierInput>;
  /** An array of thread fields to attach to the thread upon creation. */
  threadFields?: InputMaybe<Array<CreateThreadFieldOnThreadInput>>;
  /** The title of the thread. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateThreadLinkInput = {
  linearIssue?: InputMaybe<LinearIssueThreadLinkInput>;
  threadId: Scalars['ID']['input'];
};

export type CreateThreadLinkOutput = {
  __typename: 'CreateThreadLinkOutput';
  error?: Maybe<MutationError>;
  threadLink?: Maybe<ThreadLink>;
};

export type CreateThreadOutput = {
  __typename: 'CreateThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type CreateTierInput = {
  /** The color to assign to this tier, given by its hex code (e.g. #FABADA). This color is used in Plain's UI to represent this tier. */
  color: Scalars['String']['input'];
  /** Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it. If not provided, it defaults to 2 (normal priority). */
  defaultThreadPriority?: InputMaybe<Scalars['Int']['input']>;
  /** The external ID of this tier. You can use this field to store your own unique identifier for this tier. This must be unique in your workspace. */
  externalId: Scalars['String']['input'];
  /**
   * If set to true, this tier will be applied to all threads that do not match any other tier.
   *
   * Only one tier can be the default tier.
   *
   * Default: false
   */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  memberIdentifiers: Array<TierMemberIdentifierInput>;
  /** The name of this tier. */
  name: Scalars['String']['input'];
};

export type CreateTierOutput = {
  __typename: 'CreateTierOutput';
  error?: Maybe<MutationError>;
  tier?: Maybe<Tier>;
};

export type CreateUserAccountInput = {
  fullName: Scalars['String']['input'];
  marketingConsent?: InputMaybe<Scalars['Boolean']['input']>;
  publicName: Scalars['String']['input'];
};

export type CreateUserAccountOutput = {
  __typename: 'CreateUserAccountOutput';
  error?: Maybe<MutationError>;
  userAccount?: Maybe<UserAccount>;
};

export type CreateUserAuthSlackIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateUserAuthSlackIntegrationOutput = {
  __typename: 'CreateUserAuthSlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserAuthSlackIntegration>;
};

export type CreateWebhookTargetInput = {
  description: Scalars['String']['input'];
  eventSubscriptions: Array<WebhookTargetEventSubscriptionInput>;
  isEnabled: Scalars['Boolean']['input'];
  url: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWebhookTargetOutput = {
  __typename: 'CreateWebhookTargetOutput';
  error?: Maybe<MutationError>;
  webhookTarget?: Maybe<WebhookTarget>;
};

export type CreateWorkflowRuleInput = {
  name: Scalars['String']['input'];
  /** JSON-encoded payload of the rule definition. */
  payload: Scalars['String']['input'];
};

export type CreateWorkflowRuleOutput = {
  __typename: 'CreateWorkflowRuleOutput';
  error?: Maybe<MutationError>;
  workflowRule?: Maybe<WorkflowRule>;
};

export type CreateWorkspaceDiscordIntegrationInput = {
  name: Scalars['String']['input'];
  webhookUrl: Scalars['String']['input'];
};

export type CreateWorkspaceDiscordIntegrationOutput = {
  __typename: 'CreateWorkspaceDiscordIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceDiscordIntegration>;
};

export type CreateWorkspaceEmailDomainSettingsInput = {
  supportEmailAddress: Scalars['String']['input'];
};

export type CreateWorkspaceEmailDomainSettingsOutput = {
  __typename: 'CreateWorkspaceEmailDomainSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type CreateWorkspaceInput = {
  name: Scalars['String']['input'];
  publicName: Scalars['String']['input'];
};

export type CreateWorkspaceMsTeamsIntegrationInput = {
  msTeamsTenantId: Scalars['ID']['input'];
};

export type CreateWorkspaceMsTeamsIntegrationOutput = {
  __typename: 'CreateWorkspaceMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceMsTeamsIntegration>;
};

export type CreateWorkspaceOutput = {
  __typename: 'CreateWorkspaceOutput';
  error?: Maybe<MutationError>;
  workspace?: Maybe<Workspace>;
};

export type CreateWorkspaceSlackChannelIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateWorkspaceSlackChannelIntegrationOutput = {
  __typename: 'CreateWorkspaceSlackChannelIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackChannelIntegration>;
};

export type CreateWorkspaceSlackIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateWorkspaceSlackIntegrationOutput = {
  __typename: 'CreateWorkspaceSlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackIntegration>;
};

export enum CurrencyCode {
  Usd = 'USD'
}

export type CustomEntry = {
  __typename: 'CustomEntry';
  attachments: Array<Attachment>;
  components: Array<CustomTimelineEntryComponent>;
  externalId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type CustomTimelineEntryComponent = ComponentBadge | ComponentContainer | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type Customer = {
  __typename: 'Customer';
  /** When the customer was assigned to a user. */
  assignedAt?: Maybe<DateTime>;
  /** The user the customer is assigned to. */
  assignedToUser?: Maybe<UserActor>;
  /** The avatar URL of the customer. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The company the customer belongs to. */
  company?: Maybe<Company>;
  createdAt: DateTime;
  createdBy: Actor;
  /** A subquery to fetch the customer's group memberships. */
  customerGroupMemberships: CustomerGroupMembershipConnection;
  /** The customer's email address. */
  email: EmailAddress;
  /** Your system's ID for this customer. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** The full name of the customer. */
  fullName: Scalars['String']['output'];
  /** Uniquely identifies a customer in Plain. */
  id: Scalars['ID']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  /** @deprecated Use Thread.statusChangedAt instead */
  lastIdleAt?: Maybe<DateTime>;
  markedAsSpamAt?: Maybe<DateTime>;
  markedAsSpamBy?: Maybe<InternalActor>;
  /** An optional short name of the customer, typically their first name. */
  shortName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use Thread.status instead */
  status?: Maybe<CustomerStatus>;
  /** @deprecated Use Thread.statusChangedAt instead */
  statusChangedAt?: Maybe<DateTime>;
  /** A subquery to fetch the customer's tenants. */
  tenantMemberships: CustomerTenantMembershipConnection;
  updatedAt: DateTime;
  updatedBy: Actor;
};


/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type CustomerCustomerGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CustomerGroupMembershipsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type CustomerTenantMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerActor = {
  __typename: 'CustomerActor';
  customer: Customer;
  customerId: Scalars['ID']['output'];
};

export type CustomerCardComponent = ComponentBadge | ComponentContainer | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

/**
 * The configuration of a customer card that defines four important things:
 *
 * - The title of the card
 * - The key of the card, which will be used in the request payload to the API URL
 * - The order in which the cards should appear
 * - Which API the card should be loaded from (and the required authentication headers)
 *
 * Configs that have the same API URL and API Headers will be loaded in batch. API header names are treated case insensitively.
 *
 * A maximum of 25 customer cards can be configured.
 */
export type CustomerCardConfig = {
  __typename: 'CustomerCardConfig';
  /** An array of headers name-value pairs (maximum length of array: 20). Requires the `customerCardConfigApiDetails:read` permission. */
  apiHeaders: Array<CustomerCardConfigApiHeader>;
  /** The URL from which this card should be loaded (must start with `https://` and be a valid URL, max length: 600 characters). Requires the `customerCardConfigApiDetails:read` permission. */
  apiUrl: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  /** The default time the card should be cached for if no TTL is provided in the card response. (minimum: 15 seconds, maximum: 1 year or  31,536,000 seconds). */
  defaultTimeToLiveSeconds: Scalars['Int']['output'];
  /** The ID of the customer card config. */
  id: Scalars['ID']['output'];
  /** Indicates if the customer card is enabled or not. Disabled customer card configs are not loaded or displayed for customers. */
  isEnabled: Scalars['Boolean']['output'];
  /** The key of the card (must be unique in a workspace, max length: 500 characters, must match regex: `[a-zA-Z0-9_-]+`). */
  key: Scalars['String']['output'];
  /**
   * The order in which this customer card config should be shown.
   *
   * Duplicate order numbers are allowed, in case the order is the same they will be sorted based on `id`. The minimum is 0 and the maximum is 100000.
   */
  order: Scalars['Int']['output'];
  /** The title of the card (max length: 500 characters). */
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** An API header that will be sent to the configured API URL. */
export type CustomerCardConfigApiHeader = {
  __typename: 'CustomerCardConfigApiHeader';
  /** The name of the header, trimmed and treated case insensitively for deduplication purposes (min length: 1, max length: 100). Not all header names are allowed. */
  name: Scalars['String']['output'];
  /** The value of the header, treated case sensitively for deduplication purposes (min length: 1, max length: 500). */
  value: Scalars['String']['output'];
};

/** An API header that will be sent to the configured API URL. */
export type CustomerCardConfigApiHeaderInput = {
  /** The name of the header, trimmed and treated case insensitively for deduplication purposes (min length: 1, max length: 100). Not all header names are allowed. */
  name: Scalars['String']['input'];
  /** The value of the header, treated case sensitively for deduplication purposes (min length: 1, max length: 500). */
  value: Scalars['String']['input'];
};

export type CustomerCardConfigOrderInput = {
  /** The ID of the customer card config to be reordered. */
  customerCardConfigId: Scalars['ID']['input'];
  /** The order the customer card config should have. */
  order: Scalars['Int']['input'];
};

/**
 * A shared interface for all common properties customer card instances can have.
 * A customer can only have one customer card instance for each customer card config at any point in time.
 *
 * Has 3 implementations:
 * - `CustomerCardInstanceLoading`
 * - `CustomerCardInstanceLoaded`
 * - `CustomerCardInstanceError`
 */
export type CustomerCardInstance = {
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type CustomerCardInstanceChange = {
  __typename: 'CustomerCardInstanceChange';
  changeType: ChangeType;
  customerCardInstance: CustomerCardInstance;
};

export type CustomerCardInstanceChangesResult = CustomerCardInstanceChange | SubscriptionAcknowledgement;

export type CustomerCardInstanceError = CustomerCardInstance & {
  __typename: 'CustomerCardInstanceError';
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  /** The details of the customer card load error. */
  errorDetail: CustomerCardInstanceErrorDetail;
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

/** Details for the reasons why the customer card failed to load. */
export type CustomerCardInstanceErrorDetail = CustomerCardInstanceMissingCardErrorDetail | CustomerCardInstanceRequestErrorDetail | CustomerCardInstanceResponseBodyErrorDetail | CustomerCardInstanceStatusCodeErrorDetail | CustomerCardInstanceTimeoutErrorDetail | CustomerCardInstanceUnknownErrorDetail;

/** A loaded customer card. */
export type CustomerCardInstanceLoaded = CustomerCardInstance & {
  __typename: 'CustomerCardInstanceLoaded';
  /** The list of components of the customer card. If this is null it means the customer card was returned on the API, but the components array was empty. */
  components?: Maybe<Array<CustomerCardComponent>>;
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  expiresAt: DateTime;
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** When the customer card was received from the API. */
  loadedAt: DateTime;
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

/**
 * A loading customer card. The createdAt timestamp indicates when the load was started.
 * Will be updated to be a CustomerCardInstanceLoaded or CustomerCardInstanceError.
 */
export type CustomerCardInstanceLoading = CustomerCardInstance & {
  __typename: 'CustomerCardInstanceLoading';
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

/** The configured API URL didn't return a requested card key. */
export type CustomerCardInstanceMissingCardErrorDetail = {
  __typename: 'CustomerCardInstanceMissingCardErrorDetail';
  cardKey: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Plain failed to make the request to the configured API URL. */
export type CustomerCardInstanceRequestErrorDetail = {
  __typename: 'CustomerCardInstanceRequestErrorDetail';
  errorCode: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** An invalid response body was returned from the configured API URL. */
export type CustomerCardInstanceResponseBodyErrorDetail = {
  __typename: 'CustomerCardInstanceResponseBodyErrorDetail';
  message: Scalars['String']['output'];
  responseBody: Scalars['String']['output'];
};

/** A non-200 status code was returned from the configured API URL. */
export type CustomerCardInstanceStatusCodeErrorDetail = {
  __typename: 'CustomerCardInstanceStatusCodeErrorDetail';
  message: Scalars['String']['output'];
  responseBody: Scalars['String']['output'];
  statusCode: Scalars['Int']['output'];
};

/** The card failed to load within the timeout. */
export type CustomerCardInstanceTimeoutErrorDetail = {
  __typename: 'CustomerCardInstanceTimeoutErrorDetail';
  message: Scalars['String']['output'];
  timeoutSeconds: Scalars['Int']['output'];
};

/** An unknown error occurred. If this error is persistent, please contact our support. */
export type CustomerCardInstanceUnknownErrorDetail = {
  __typename: 'CustomerCardInstanceUnknownErrorDetail';
  message: Scalars['String']['output'];
};

export type CustomerChange = {
  __typename: 'CustomerChange';
  changeType: ChangeType;
  customer: Customer;
};

export type CustomerChangesFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CustomerConnection = {
  __typename: 'CustomerConnection';
  edges: Array<CustomerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CustomerEdge = {
  __typename: 'CustomerEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

export type CustomerEmailActor = {
  __typename: 'CustomerEmailActor';
  customer: Customer;
  customerId: Scalars['ID']['output'];
};

export type CustomerEvent = {
  __typename: 'CustomerEvent';
  /** The list of components of the event. */
  components: Array<EventComponent>;
  /** The datetime when this event was created. */
  createdAt: DateTime;
  /** The actor who created this event. */
  createdBy: Actor;
  /** The customer that this event belongs to. */
  customerId: Scalars['ID']['output'];
  /** The ID of the event. */
  id: Scalars['ID']['output'];
  /** The title of the event. */
  title: Scalars['String']['output'];
  /** The datetime when this event was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this event. */
  updatedBy: Actor;
};

export type CustomerEventEntry = TimelineEventEntry & {
  __typename: 'CustomerEventEntry';
  components: Array<EventComponent>;
  customerId: Scalars['ID']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  timelineEventId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type CustomerGroup = {
  __typename: 'CustomerGroup';
  color: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerGroupConnection = {
  __typename: 'CustomerGroupConnection';
  edges: Array<CustomerGroupEdge>;
  pageInfo: PageInfo;
};

export type CustomerGroupEdge = {
  __typename: 'CustomerGroupEdge';
  cursor: Scalars['String']['output'];
  node: CustomerGroup;
};

export type CustomerGroupIdentifier = {
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  customerGroupKey?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerGroupMembership = {
  __typename: 'CustomerGroupMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  customerGroup: CustomerGroup;
  customerId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerGroupMembershipConnection = {
  __typename: 'CustomerGroupMembershipConnection';
  edges: Array<CustomerGroupMembershipEdge>;
  pageInfo: PageInfo;
};

export type CustomerGroupMembershipEdge = {
  __typename: 'CustomerGroupMembershipEdge';
  cursor: Scalars['String']['output'];
  node: CustomerGroupMembership;
};

export type CustomerGroupMembershipsFilter = {
  customerGroupExternalIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CustomerGroupsFilter = {
  externalIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Only one of the fields can be set. */
export type CustomerIdentifierInput = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['ID']['input']>;
};

export type CustomerImpersonationInput = {
  customerIdentifier: CustomerIdentifierInput;
};

/**
 * The customer attributes available for search, each of them mapped to a search expression.
 * Exactly one of them must be provided in a single search condition.
 */
export type CustomerSearchCondition = {
  /** Search expression on the customer's email address. */
  email?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's external id. */
  externalId?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's full name. */
  fullName?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's short name. */
  shortName?: InputMaybe<StringSearchExpression>;
  /**
   * Search expression on specific timeline entries' text (email, chat) sent or received by the customer.
   * Common English stop-words will be removed from the text to search.
   */
  timelineEntryText?: InputMaybe<StringSearchExpression>;
};

export type CustomerSearchConnection = {
  __typename: 'CustomerSearchConnection';
  edges: Array<CustomerSearchEdge>;
  pageInfo: PageInfo;
};

export type CustomerSearchEdge = {
  __typename: 'CustomerSearchEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

export enum CustomerStatus {
  /** @deprecated Use ThreadStatus.TODO instead */
  Active = 'ACTIVE',
  /** @deprecated Use ThreadStatus.DONE instead */
  Idle = 'IDLE',
  /** @deprecated Use ThreadStatus.SNOOZED instead */
  Snoozed = 'SNOOZED'
}

export type CustomerTenantMembership = {
  __typename: 'CustomerTenantMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  tenant: Tenant;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerTenantMembershipConnection = {
  __typename: 'CustomerTenantMembershipConnection';
  edges: Array<CustomerTenantMembershipEdge>;
  pageInfo: PageInfo;
};

export type CustomerTenantMembershipEdge = {
  __typename: 'CustomerTenantMembershipEdge';
  cursor: Scalars['String']['output'];
  node: CustomerTenantMembership;
};

export type CustomersFilter = {
  /**
   * Filters customers to those belonging to the given companies.
   * Customers who dont belong to any of the given companies will not be included.
   * Can be combined with other company filters.
   */
  companyIdentifiers?: InputMaybe<Array<CompanyIdentifierInput>>;
  /**
   * Filters customers to those with at least one of the given customer group IDs.
   * Customers with no groups will not be included.
   * Can be combined with other group filters.
   */
  customerGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filters customers to those with at least one of the given customer group keys.
   * Customers with no groups will not be included.
   * Can be combined with other group filters.
   */
  customerGroupKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Filters customers to those belonging to the given tenants.
   * Customers who dont belong to any of the given tenants will not be included.
   * Can be combined with other company filters.
   */
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
};

/**
 * A query to search for customers. Search queries are combinations of search conditions, as defined
 * below. At least one search condition must be provided.
 */
export type CustomersSearchQuery = {
  /** An array of search conditions that will be combined using a 'logical OR' to search for customers. */
  or?: InputMaybe<Array<CustomerSearchCondition>>;
};

export type CustomersSort = {
  direction: SortDirection;
  field: CustomersSortField;
};

export enum CustomersSortField {
  FullName = 'FULL_NAME'
}

export type DateTime = {
  __typename: 'DateTime';
  iso8601: Scalars['String']['output'];
  unixTimestamp: Scalars['String']['output'];
};

export type DatetimeFilter = {
  /** Timestamps -greater or equal- than this value. ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Timestamps -less- than this value. ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  before?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteApiKeyInput = {
  apiKeyId: Scalars['ID']['input'];
};

export type DeleteApiKeyOutput = {
  __typename: 'DeleteApiKeyOutput';
  apiKey?: Maybe<ApiKey>;
  error?: Maybe<MutationError>;
};

export type DeleteAutoresponderInput = {
  autoresponderId: Scalars['ID']['input'];
};

export type DeleteAutoresponderOutput = {
  __typename: 'DeleteAutoresponderOutput';
  autoresponder?: Maybe<Autoresponder>;
  error?: Maybe<MutationError>;
};

export type DeleteBusinessHoursOutput = {
  __typename: 'DeleteBusinessHoursOutput';
  error?: Maybe<MutationError>;
};

export type DeleteChatAppInput = {
  chatAppId: Scalars['ID']['input'];
};

export type DeleteChatAppOutput = {
  __typename: 'DeleteChatAppOutput';
  error?: Maybe<MutationError>;
};

export type DeleteChatAppSecretInput = {
  chatAppId: Scalars['ID']['input'];
};

export type DeleteChatAppSecretOutput = {
  __typename: 'DeleteChatAppSecretOutput';
  error?: Maybe<MutationError>;
};

export type DeleteCustomerCardConfigInput = {
  /** The customer card config ID to delete. */
  customerCardConfigId: Scalars['ID']['input'];
};

export type DeleteCustomerCardConfigOutput = {
  __typename: 'DeleteCustomerCardConfigOutput';
  error?: Maybe<MutationError>;
};

export type DeleteCustomerGroupInput = {
  customerGroupId: Scalars['ID']['input'];
};

export type DeleteCustomerGroupOutput = {
  __typename: 'DeleteCustomerGroupOutput';
  error?: Maybe<MutationError>;
};

export type DeleteCustomerInput = {
  customerId: Scalars['ID']['input'];
};

export type DeleteCustomerOutput = {
  __typename: 'DeleteCustomerOutput';
  error?: Maybe<MutationError>;
};

export type DeleteIndexedDocumentInput = {
  indexedDocumentId: Scalars['ID']['input'];
};

export type DeleteIndexedDocumentOutput = {
  __typename: 'DeleteIndexedDocumentOutput';
  error?: Maybe<MutationError>;
};

export type DeleteMachineUserInput = {
  machineUserId: Scalars['ID']['input'];
};

export type DeleteMachineUserOutput = {
  __typename: 'DeleteMachineUserOutput';
  error?: Maybe<MutationError>;
  machineUser?: Maybe<MachineUser>;
};

export type DeleteMyLinearIntegrationOutput = {
  __typename: 'DeleteMyLinearIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteMyMsTeamsIntegrationOutput = {
  __typename: 'DeleteMyMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserMsTeamsIntegration>;
};

export type DeleteMySlackIntegrationOutput = {
  __typename: 'DeleteMySlackIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteNoteInput = {
  noteId: Scalars['ID']['input'];
};

export type DeleteNoteOutput = {
  __typename: 'DeleteNoteOutput';
  error?: Maybe<MutationError>;
  note?: Maybe<Note>;
};

export type DeleteServiceAuthorizationInput = {
  serviceAuthorizationId: Scalars['ID']['input'];
};

export type DeleteServiceAuthorizationOutput = {
  __typename: 'DeleteServiceAuthorizationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteServiceLevelAgreementInput = {
  serviceLevelAgreementId: Scalars['ID']['input'];
};

export type DeleteServiceLevelAgreementOutput = {
  __typename: 'DeleteServiceLevelAgreementOutput';
  error?: Maybe<MutationError>;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

export type DeleteSnippetInput = {
  snippetId: Scalars['ID']['input'];
};

export type DeleteSnippetOutput = {
  __typename: 'DeleteSnippetOutput';
  error?: Maybe<MutationError>;
  snippet?: Maybe<Snippet>;
};

export type DeleteThreadChannelAssociationInput = {
  threadChannelAssociationId: Scalars['ID']['input'];
};

export type DeleteThreadChannelAssociationOutput = {
  __typename: 'DeleteThreadChannelAssociationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteThreadFieldInput = {
  threadFieldId: Scalars['ID']['input'];
};

export type DeleteThreadFieldOutput = {
  __typename: 'DeleteThreadFieldOutput';
  error?: Maybe<MutationError>;
};

export type DeleteThreadFieldSchemaInput = {
  threadFieldSchemaId: Scalars['ID']['input'];
};

export type DeleteThreadFieldSchemaOutput = {
  __typename: 'DeleteThreadFieldSchemaOutput';
  error?: Maybe<MutationError>;
};

export type DeleteThreadLinkInput = {
  threadLinkId: Scalars['ID']['input'];
};

export type DeleteThreadLinkOutput = {
  __typename: 'DeleteThreadLinkOutput';
  error?: Maybe<MutationError>;
};

export type DeleteTierInput = {
  tierId: Scalars['ID']['input'];
};

export type DeleteTierOutput = {
  __typename: 'DeleteTierOutput';
  error?: Maybe<MutationError>;
  tier?: Maybe<Tier>;
};

export type DeleteUserAuthSlackIntegrationInput = {
  slackTeamId: Scalars['String']['input'];
};

export type DeleteUserAuthSlackIntegrationOutput = {
  __typename: 'DeleteUserAuthSlackIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteUserInput = {
  userId: Scalars['ID']['input'];
};

export type DeleteUserOutput = {
  __typename: 'DeleteUserOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWebhookTargetInput = {
  webhookTargetId: Scalars['ID']['input'];
};

export type DeleteWebhookTargetOutput = {
  __typename: 'DeleteWebhookTargetOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkflowRuleInput = {
  workflowRuleId: Scalars['ID']['input'];
};

export type DeleteWorkflowRuleOutput = {
  __typename: 'DeleteWorkflowRuleOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkspaceDiscordIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceDiscordIntegrationOutput = {
  __typename: 'DeleteWorkspaceDiscordIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceDiscordIntegration>;
};

export type DeleteWorkspaceEmailDomainSettingsOutput = {
  __typename: 'DeleteWorkspaceEmailDomainSettingsOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkspaceInviteInput = {
  inviteId: Scalars['ID']['input'];
};

export type DeleteWorkspaceInviteOutput = {
  __typename: 'DeleteWorkspaceInviteOutput';
  error?: Maybe<MutationError>;
  invite?: Maybe<WorkspaceInvite>;
};

export type DeleteWorkspaceMsTeamsIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceMsTeamsIntegrationOutput = {
  __typename: 'DeleteWorkspaceMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceMsTeamsIntegration>;
};

export type DeleteWorkspaceSlackChannelIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceSlackChannelIntegrationOutput = {
  __typename: 'DeleteWorkspaceSlackChannelIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackChannelIntegration>;
};

export type DeleteWorkspaceSlackIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceSlackIntegrationOutput = {
  __typename: 'DeleteWorkspaceSlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackIntegration>;
};

export type DeletedCustomerActor = {
  __typename: 'DeletedCustomerActor';
  customerId: Scalars['ID']['output'];
};

export type DeletedCustomerEmailActor = {
  __typename: 'DeletedCustomerEmailActor';
  customerId: Scalars['ID']['output'];
};

export type DependsOnThreadFieldInput = {
  threadFieldSchemaId: Scalars['ID']['input'];
  threadFieldSchemaValue: Scalars['String']['input'];
};

export type DependsOnThreadFieldType = {
  __typename: 'DependsOnThreadFieldType';
  threadFieldSchemaId: Scalars['ID']['output'];
  threadFieldSchemaValue: Scalars['String']['output'];
};

export type DnsRecord = {
  __typename: 'DnsRecord';
  isVerified: Scalars['Boolean']['output'];
  lastCheckedAt?: Maybe<DateTime>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
  verifiedAt?: Maybe<DateTime>;
};

export enum DoneStatusDetail {
  DoneManuallySet = 'DONE_MANUALLY_SET',
  Ignored = 'IGNORED',
  TimerExpired = 'TIMER_EXPIRED'
}

export type Email = {
  __typename: 'Email';
  additionalRecipients: Array<EmailParticipant>;
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  customer: Customer;
  from: EmailParticipant;
  hiddenRecipients: Array<EmailParticipant>;
  id: Scalars['ID']['output'];
  inReplyToEmailId?: Maybe<Scalars['ID']['output']>;
  markdownContent?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  textContent?: Maybe<Scalars['String']['output']>;
  thread?: Maybe<Thread>;
  to: EmailParticipant;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type EmailActor = CustomerEmailActor | DeletedCustomerEmailActor | SupportEmailAddressEmailActor | UserEmailActor;

/** An object modelling an email address and if it's been verified. */
export type EmailAddress = {
  __typename: 'EmailAddress';
  /** The email address. */
  email: Scalars['String']['output'];
  /** If the email address ownership has been verified (e.g. via sending an email with a code). If the email is not verified, Plain may not email this address. */
  isVerified: Scalars['Boolean']['output'];
  /** When the email became verified in Plain. */
  verifiedAt?: Maybe<DateTime>;
};

export type EmailAddressInput = {
  email: Scalars['String']['input'];
  isVerified: Scalars['Boolean']['input'];
};

export enum EmailAuthenticity {
  Fail = 'FAIL',
  Pass = 'PASS',
  Unknown = 'UNKNOWN'
}

export type EmailBounce = {
  __typename: 'EmailBounce';
  bouncedAt: DateTime;
  isSendRetriable: Scalars['Boolean']['output'];
  recipient: EmailParticipant;
};

export type EmailEntry = {
  __typename: 'EmailEntry';
  additionalRecipients: Array<EmailParticipant>;
  /** All the attachments included in this email. */
  attachments: Array<Attachment>;
  authenticity: EmailAuthenticity;
  /** If any of the recipients bounces the email, this will contain the list of bounces. */
  bounces: Array<EmailBounce>;
  emailId: Scalars['ID']['output'];
  from: EmailParticipant;
  /** The full email's markdown content, including all replies. */
  fullMarkdownContent?: Maybe<Scalars['String']['output']>;
  /** The full email's text content, including all replies. */
  fullTextContent?: Maybe<Scalars['String']['output']>;
  /** Boolean indicating whether there is more markdown content available that can be resolved via the `fullMarkdownContent` field. */
  hasMoreMarkdownContent: Scalars['Boolean']['output'];
  /** Boolean indicating whether there is more text content available that can be resolved via the `fullTextContent` field. */
  hasMoreTextContent: Scalars['Boolean']['output'];
  hiddenRecipients: Array<EmailParticipant>;
  /** Whether this email entry is the start of a new thread in Plain. Can be used to show the full email content. */
  isStartOfThread: Scalars['Boolean']['output'];
  /** The most recent email's markdown content. */
  markdownContent?: Maybe<Scalars['String']['output']>;
  /** When the email was received by Plain. */
  receivedAt?: Maybe<DateTime>;
  /** Informs whether the email was sent successfully, bounced or failed. If the email is still being sent, the status will be 'PENDING'. Only set for outbound emails. */
  sendStatus?: Maybe<EmailSendStatus>;
  /** When the email was sent. Only set for outbound emails and will be null until the email is sent. */
  sentAt?: Maybe<DateTime>;
  subject?: Maybe<Scalars['String']['output']>;
  /** The most recent email's text content. */
  textContent?: Maybe<Scalars['String']['output']>;
  to: EmailParticipant;
};

export type EmailParticipant = {
  __typename: 'EmailParticipant';
  email: Scalars['String']['output'];
  emailActor?: Maybe<EmailActor>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EmailParticipantInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EmailPreviewUrl = {
  __typename: 'EmailPreviewUrl';
  expiresAt: DateTime;
  previewUrl: Scalars['String']['output'];
};

export enum EmailSendStatus {
  /** Some (or all) of the recipients bounced the email, meaning they did not recieve it. Check 'bounces' for more details on which recipients bounced. */
  Bounced = 'BOUNCED',
  /** The email failed to send. This will happen if the main recipient (To) bounced the email, or if there was an unexpected error sending the email. */
  Failed = 'FAILED',
  /** The email is being sent. */
  Pending = 'PENDING',
  /** The email was sent successfully to all recipients. */
  Sent = 'SENT'
}

export type EmailSignature = {
  __typename: 'EmailSignature';
  createdAt: DateTime;
  createdBy: InternalActor;
  markdown?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** A union of all possible entries that can appear in a timeline. */
export type Entry = ChatEntry | CustomEntry | CustomerEventEntry | EmailEntry | LinearIssueThreadLinkStateTransitionedEntry | MsTeamsMessageEntry | NoteEntry | ServiceLevelAgreementStatusTransitionedEntry | SlackMessageEntry | SlackReplyEntry | ThreadAdditionalAssigneesTransitionedEntry | ThreadAssignmentTransitionedEntry | ThreadDiscussionEntry | ThreadDiscussionResolvedEntry | ThreadEventEntry | ThreadLabelsChangedEntry | ThreadPriorityChangedEntry | ThreadStatusTransitionedEntry;

export type EventComponent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

export type EventComponentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export enum FeatureKey {
  BillingRotaSeats = 'BILLING_ROTA_SEATS',
  BusinessHours = 'BUSINESS_HOURS',
  ConnectedCustomerSlackChannels = 'CONNECTED_CUSTOMER_SLACK_CHANNELS',
  ConnectedSupportEmailAddresses = 'CONNECTED_SUPPORT_EMAIL_ADDRESSES',
  DataImporters = 'DATA_IMPORTERS',
  InsightsLookbackDays = 'INSIGHTS_LOOKBACK_DAYS',
  LiveChat = 'LIVE_CHAT',
  MoreActiveEngRotaSeats = 'MORE_ACTIVE_ENG_ROTA_SEATS',
  MsTeamsIntegration = 'MS_TEAMS_INTEGRATION',
  ServiceLevelAgreements = 'SERVICE_LEVEL_AGREEMENTS',
  SlackDiscussions = 'SLACK_DISCUSSIONS',
  WorkflowRules = 'WORKFLOW_RULES'
}

export type FileSize = {
  __typename: 'FileSize';
  bytes: Scalars['Int']['output'];
  kiloBytes: Scalars['Float']['output'];
  megaBytes: Scalars['Float']['output'];
};

export type FirstResponseTimeServiceLevelAgreement = ServiceLevelAgreement & {
  __typename: 'FirstResponseTimeServiceLevelAgreement';
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  /** This SLA will breach if it does not receive a first response within this many minutes. */
  firstResponseTimeMinutes: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  threadPriorityFilter: Array<Scalars['Int']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  useBusinessHoursOnly: Scalars['Boolean']['output'];
};

export type ForkThreadInput = {
  threadId: Scalars['ID']['input'];
  timelineEntryId: Scalars['ID']['input'];
};

export type ForkThreadOutput = {
  __typename: 'ForkThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type GeneratedReply = {
  __typename: 'GeneratedReply';
  text: Scalars['String']['output'];
};

export type ImpersonationInput = {
  asCustomer: CustomerImpersonationInput;
};

export type IndexedDocument = {
  __typename: 'IndexedDocument';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type IndexedDocumentConnection = {
  __typename: 'IndexedDocumentConnection';
  edges: Array<IndexedDocumentEdge>;
  pageInfo: PageInfo;
};

export type IndexedDocumentEdge = {
  __typename: 'IndexedDocumentEdge';
  cursor: Scalars['String']['output'];
  node: IndexedDocument;
};

export type IntArrayInput = {
  value: Array<Scalars['Int']['input']>;
};

export type IntInput = {
  value: Scalars['Int']['input'];
};

export type InternalActor = MachineUserActor | SystemActor | UserActor;

export type InviteUserToWorkspaceInput = {
  email: Scalars['String']['input'];
  /** @deprecated Use roleKey instead. */
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  roleKey?: InputMaybe<RoleKey>;
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type InviteUserToWorkspaceOutput = {
  __typename: 'InviteUserToWorkspaceOutput';
  error?: Maybe<MutationError>;
  invite?: Maybe<WorkspaceInvite>;
};

export type JiraIntegrationToken = {
  __typename: 'JiraIntegrationToken';
  token: Scalars['String']['output'];
};

export type JiraSite = {
  __typename: 'JiraSite';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type JiraSiteIntegration = ServiceIntegration & {
  __typename: 'JiraSiteIntegration';
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  site: JiraSite;
};

export type Label = {
  __typename: 'Label';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  labelType: LabelType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type LabelType = {
  __typename: 'LabelType';
  archivedAt?: Maybe<DateTime>;
  archivedBy?: Maybe<InternalActor>;
  createdAt: DateTime;
  createdBy: InternalActor;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type LabelTypeConnection = {
  __typename: 'LabelTypeConnection';
  edges: Array<LabelTypeEdge>;
  pageInfo: PageInfo;
};

export type LabelTypeEdge = {
  __typename: 'LabelTypeEdge';
  cursor: Scalars['String']['output'];
  node: LabelType;
};

export type LabelTypeFilter = {
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinearIntegrationToken = {
  __typename: 'LinearIntegrationToken';
  token: Scalars['String']['output'];
};

export type LinearIssueState = {
  __typename: 'LinearIssueState';
  color: Scalars['String']['output'];
  label: Scalars['String']['output'];
  type: LinearIssueStateType;
};

/**
 * Represents the possible states of a Linear issue, sourced from the Linear API.
 * Reference: https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/WorkflowState#type
 */
export enum LinearIssueStateType {
  Backlog = 'BACKLOG',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Started = 'STARTED',
  Triage = 'TRIAGE',
  /** Placeholder for unknown or unsupported future states from Linear. */
  Unknown = 'UNKNOWN',
  Unstarted = 'UNSTARTED'
}

export type LinearIssueThreadLink = ThreadLink & {
  __typename: 'LinearIssueThreadLink';
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linearIssueCreatedAt: DateTime;
  linearIssueId: Scalars['ID']['output'];
  linearIssueIdentifier: Scalars['String']['output'];
  linearIssueState: LinearIssueState;
  linearIssueUpdatedAt: DateTime;
  /** @deprecated Use url instead. */
  linearIssueUrl: Scalars['String']['output'];
  status: ThreadLinkStatus;
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type LinearIssueThreadLinkInput = {
  linearIssueId: Scalars['ID']['input'];
  linearIssueUrl: Scalars['String']['input'];
};

export type LinearIssueThreadLinkStateTransitionedEntry = {
  __typename: 'LinearIssueThreadLinkStateTransitionedEntry';
  linearIssueId: Scalars['ID']['output'];
  /** Refers to the id of the WorkflowState object in Linear. This can be used to fetch the WorkflowState from the Linear API. */
  nextLinearStateId: Scalars['ID']['output'];
  /** Refers to the id of the WorkflowState object in Linear. This can be used to fetch the WorkflowState from the Linear API. */
  previousLinearStateId: Scalars['ID']['output'];
};

export type MsTeamsMessage = {
  __typename: 'MSTeamsMessage';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  deletedOnMsTeamsAt?: Maybe<DateTime>;
  html: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastEditedOnMsTeamsAt?: Maybe<DateTime>;
  msTeamsConversationId?: Maybe<Scalars['ID']['output']>;
  msTeamsMessageId?: Maybe<Scalars['ID']['output']>;
  msTeamsTeamId?: Maybe<Scalars['ID']['output']>;
  msTeamsTenantId?: Maybe<Scalars['ID']['output']>;
  text: Scalars['String']['output'];
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type MsTeamsMessageEntry = {
  __typename: 'MSTeamsMessageEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID']['output'];
  deletedOnMsTeamsAt?: Maybe<DateTime>;
  lastEditedOnMsTeamsAt?: Maybe<DateTime>;
  msTeamsMessageId: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type MachineUser = {
  __typename: 'MachineUser';
  apiKey?: Maybe<ApiKey>;
  apiKeys: ApiKeyConnection;
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<Actor>;
  description?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  publicName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type MachineUserApiKeyArgs = {
  apiKeyId: Scalars['ID']['input'];
};


export type MachineUserApiKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MachineUserActor = {
  __typename: 'MachineUserActor';
  machineUser: MachineUser;
  machineUserId: Scalars['ID']['output'];
};

export type MachineUserConnection = {
  __typename: 'MachineUserConnection';
  edges: Array<MachineUserEdge>;
  pageInfo: PageInfo;
};

export type MachineUserEdge = {
  __typename: 'MachineUserEdge';
  cursor: Scalars['String']['output'];
  node: MachineUser;
};

export type MarkCustomerAsSpamInput = {
  customerId: Scalars['ID']['input'];
};

export type MarkCustomerAsSpamOutput = {
  __typename: 'MarkCustomerAsSpamOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type MarkThreadAsDoneInput = {
  statusDetail?: InputMaybe<DoneStatusDetail>;
  threadId: Scalars['ID']['input'];
};

export type MarkThreadAsDoneOutput = {
  __typename: 'MarkThreadAsDoneOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type MarkThreadAsTodoInput = {
  statusDetail?: InputMaybe<TodoStatusDetail>;
  threadId: Scalars['ID']['input'];
};

export type MarkThreadAsTodoOutput = {
  __typename: 'MarkThreadAsTodoOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type MarkThreadDiscussionAsResolvedInput = {
  threadDiscussionId: Scalars['ID']['input'];
};

export type MarkThreadDiscussionAsResolvedOutput = {
  __typename: 'MarkThreadDiscussionAsResolvedOutput';
  error?: Maybe<MutationError>;
};

export enum MessageSource {
  Api = 'API',
  Chat = 'CHAT',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type MeteredFeatureEntitlement = BillingFeatureEntitlement & {
  __typename: 'MeteredFeatureEntitlement';
  current: Scalars['Int']['output'];
  feature: FeatureKey;
  isEntitled: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
};

export type MetricDimension = {
  __typename: 'MetricDimension';
  type: MetricDimensionType;
  value: Scalars['String']['output'];
};

export enum MetricDimensionType {
  Agent = 'AGENT',
  Company = 'COMPANY',
  CustomerGroup = 'CUSTOMER_GROUP',
  LabelType = 'LABEL_TYPE',
  MessageSource = 'MESSAGE_SOURCE',
  Priority = 'PRIORITY',
  ThreadField = 'THREAD_FIELD',
  Tier = 'TIER'
}

export type Mutation = {
  __typename: 'Mutation';
  acceptWorkspaceInvite: AcceptWorkspaceInviteOutput;
  addAdditionalAssignees: AddAdditionalAssigneesOutput;
  /** Add a customer to a customer group. */
  addCustomerToCustomerGroups: AddCustomerToCustomerGroupsOutput;
  addCustomerToTenants: AddCustomerToTenantsOutput;
  addLabels: AddLabelsOutput;
  addMembersToTier: AddMembersToTierOutput;
  addUserToActiveBillingRota: AddUserToActiveBillingRotaOutput;
  addWorkspaceAlternateSupportEmailAddress: AddWorkspaceAlternateSupportEmailAddressOutput;
  archiveLabelType: ArchiveLabelTypeOutput;
  assignRolesToUser: AssignRolesToUserOutput;
  assignThread: AssignThreadOutput;
  bulkUpsertThreadFields: BulkUpsertThreadFieldsOutput;
  calculateRoleChangeCost: CalculateRoleChangeCostOutput;
  changeBillingPlan: ChangeBillingPlanOutput;
  changeThreadPriority: ChangeThreadPriorityOutput;
  changeUserStatus: ChangeUserStatusOutput;
  completeServiceAuthorization: CompleteServiceAuthorizationOutput;
  createApiKey: CreateApiKeyOutput;
  createAttachmentDownloadUrl: CreateAttachmentDownloadUrlOutput;
  createAttachmentUploadUrl: CreateAttachmentUploadUrlOutput;
  createAutoresponder: CreateAutoresponderOutput;
  createBillingPortalSession: CreateBillingPortalSessionOutput;
  createChatApp: CreateChatAppOutput;
  createChatAppSecret: CreateChatAppSecretOutput;
  createCheckoutSession: CreateCheckoutSessionOutput;
  /** Creates a customer card config. A maximum of 25 card configs can be created. */
  createCustomerCardConfig: CreateCustomerCardConfigOutput;
  /** Create a new customer event. */
  createCustomerEvent: CreateCustomerEventOutput;
  /** Create a new customer group. */
  createCustomerGroup: CreateCustomerGroupOutput;
  createEmailPreviewUrl: CreateEmailPreviewUrlOutput;
  createIndexedDocument: CreateIndexedDocumentOutput;
  createLabelType: CreateLabelTypeOutput;
  createMachineUser: CreateMachineUserOutput;
  createMyLinearIntegration: CreateMyLinearIntegrationOutput;
  createMyMSTeamsIntegration: CreateMyMsTeamsIntegrationOutput;
  createMySlackIntegration: CreateMySlackIntegrationOutput;
  createNote: CreateNoteOutput;
  createServiceLevelAgreement: CreateServiceLevelAgreementOutput;
  createSnippet: CreateSnippetOutput;
  createThread: CreateThreadOutput;
  createThreadChannelAssociation: CreateThreadChannelAssociationOutput;
  createThreadDiscussion: CreateThreadDiscussionOutput;
  /** Create a new thread event. */
  createThreadEvent: CreateThreadEventOutput;
  createThreadFieldSchema: CreateThreadFieldSchemaOutput;
  createThreadLink: CreateThreadLinkOutput;
  createTier: CreateTierOutput;
  createUserAccount: CreateUserAccountOutput;
  createUserAuthSlackIntegration: CreateUserAuthSlackIntegrationOutput;
  /** Creates a webhook target. */
  createWebhookTarget: CreateWebhookTargetOutput;
  createWorkflowRule: CreateWorkflowRuleOutput;
  createWorkspace: CreateWorkspaceOutput;
  createWorkspaceDiscordIntegration: CreateWorkspaceDiscordIntegrationOutput;
  createWorkspaceEmailDomainSettings: CreateWorkspaceEmailDomainSettingsOutput;
  createWorkspaceMSTeamsIntegration: CreateWorkspaceMsTeamsIntegrationOutput;
  createWorkspaceSlackChannelIntegration: CreateWorkspaceSlackChannelIntegrationOutput;
  createWorkspaceSlackIntegration: CreateWorkspaceSlackIntegrationOutput;
  deleteApiKey: DeleteApiKeyOutput;
  deleteAutoresponder: DeleteAutoresponderOutput;
  /** @deprecated Use syncBusinessHoursSlots instead. */
  deleteBusinessHours: DeleteBusinessHoursOutput;
  deleteChatApp: DeleteChatAppOutput;
  deleteChatAppSecret: DeleteChatAppSecretOutput;
  /** Deletes a customer and all of their data stored on Plain. This action cannot be reversed. */
  deleteCustomer: DeleteCustomerOutput;
  /** Deletes a customer card config. */
  deleteCustomerCardConfig: DeleteCustomerCardConfigOutput;
  /** Delete a customer group by ID. */
  deleteCustomerGroup: DeleteCustomerGroupOutput;
  deleteIndexedDocument: DeleteIndexedDocumentOutput;
  deleteMachineUser: DeleteMachineUserOutput;
  deleteMyLinearIntegration: DeleteMyLinearIntegrationOutput;
  deleteMyMSTeamsIntegration: DeleteMyMsTeamsIntegrationOutput;
  deleteMySlackIntegration: DeleteMySlackIntegrationOutput;
  deleteNote: DeleteNoteOutput;
  deleteServiceAuthorization: DeleteServiceAuthorizationOutput;
  deleteServiceLevelAgreement: DeleteServiceLevelAgreementOutput;
  deleteSnippet: DeleteSnippetOutput;
  deleteThreadChannelAssociation: DeleteThreadChannelAssociationOutput;
  deleteThreadField: DeleteThreadFieldOutput;
  deleteThreadFieldSchema: DeleteThreadFieldSchemaOutput;
  deleteThreadLink: DeleteThreadLinkOutput;
  deleteTier: DeleteTierOutput;
  deleteUser: DeleteUserOutput;
  deleteUserAuthSlackIntegration: DeleteUserAuthSlackIntegrationOutput;
  /** Deletes a webhook target. */
  deleteWebhookTarget: DeleteWebhookTargetOutput;
  deleteWorkflowRule: DeleteWorkflowRuleOutput;
  deleteWorkspaceDiscordIntegration: DeleteWorkspaceDiscordIntegrationOutput;
  deleteWorkspaceEmailDomainSettings: DeleteWorkspaceEmailDomainSettingsOutput;
  deleteWorkspaceInvite: DeleteWorkspaceInviteOutput;
  deleteWorkspaceMSTeamsIntegration: DeleteWorkspaceMsTeamsIntegrationOutput;
  deleteWorkspaceSlackChannelIntegration: DeleteWorkspaceSlackChannelIntegrationOutput;
  deleteWorkspaceSlackIntegration: DeleteWorkspaceSlackIntegrationOutput;
  forkThread: ForkThreadOutput;
  inviteUserToWorkspace: InviteUserToWorkspaceOutput;
  /** Marks a customer as spam. */
  markCustomerAsSpam: MarkCustomerAsSpamOutput;
  markThreadAsDone: MarkThreadAsDoneOutput;
  markThreadAsTodo: MarkThreadAsTodoOutput;
  markThreadDiscussionAsResolved: MarkThreadDiscussionAsResolvedOutput;
  previewBillingPlanChange: PreviewBillingPlanChangeOutput;
  regenerateWorkspaceHmac: RegenerateWorkspaceHmacOutput;
  /**
   * Reloads a customer card for a customer.
   *
   * Will discard whatever is in the cache and reload it from the configured API URL.
   */
  reloadCustomerCardInstance: ReloadCustomerCardInstanceOutput;
  removeAdditionalAssignees: RemoveAdditionalAssigneesOutput;
  /** Remove a customer from a customer group. */
  removeCustomerFromCustomerGroups: RemoveCustomerFromCustomerGroupsOutput;
  removeCustomerFromTenants: RemoveCustomerFromTenantsOutput;
  removeLabels: RemoveLabelsOutput;
  removeMembersFromTier: RemoveMembersFromTierOutput;
  removeUserFromActiveBillingRota: RemoveUserFromActiveBillingRotaOutput;
  removeWorkspaceAlternateSupportEmailAddress: RemoveWorkspaceAlternateSupportEmailAddressOutput;
  reorderAutoresponders: ReorderAutorespondersOutput;
  /**
   * Reorders customer card configs.
   *
   * The input can be a partial input and in that case not all configs will be reordered.
   * For example this allows two configs to be swapped with each other.
   *
   * Note: Duplicate orders are allowed by the API.
   */
  reorderCustomerCardConfigs: ReorderCustomerCardConfigsOutput;
  reorderThreadFieldSchemas: ReorderThreadFieldSchemasOutput;
  replyToEmail: ReplyToEmailOutput;
  /**
   * Reply to the last message in a thread. This mutation supports replying to threads where the last message is
   * a Slack message, an email or a form submission. If the thread is empty, it will send an email to the customer.
   */
  replyToThread: ReplyToThreadOutput;
  sendBulkEmail: SendBulkEmailOutput;
  sendChat: SendChatOutput;
  sendCustomerChat: SendCustomerChatOutput;
  sendMSTeamsMessage: SendMsTeamsMessageOutput;
  sendNewEmail: SendNewEmailOutput;
  sendSlackMessage: SendSlackMessageOutput;
  sendThreadDiscussionMessage: SendThreadDiscussionMessageOutput;
  setCustomerTenants: SetCustomerTenantsOutput;
  shareThreadToUserInSlack: ShareThreadToUserInSlackOutput;
  snoozeThread: SnoozeThreadOutput;
  startServiceAuthorization: StartServiceAuthorizationOutput;
  syncBusinessHoursSlots: SyncBusinessHoursSlotsOutput;
  /** Adds or removes a reaction from a slack message timeline entry. */
  toggleSlackMessageReaction: ToggleSlackMessageReactionOutput;
  unarchiveLabelType: UnarchiveLabelTypeOutput;
  unassignThread: UnassignThreadOutput;
  /** Removes the spam mark from a customer. */
  unmarkCustomerAsSpam: UnmarkCustomerAsSpamOutput;
  updateActiveBillingRota: UpdateActiveBillingRotaOutput;
  updateAutoresponder: UpdateAutoresponderOutput;
  updateChatApp: UpdateChatAppOutput;
  updateCompanyTier: UpdateCompanyTierOutput;
  updateConnectedSlackChannel: UpdateConnectedSlackChannelOutput;
  /** Partially updates a customer card config. */
  updateCustomerCardConfig: UpdateCustomerCardConfigOutput;
  /** Changes the company of a customer. */
  updateCustomerCompany: UpdateCustomerCompanyOutput;
  /** Update a customer group. */
  updateCustomerGroup: UpdateCustomerGroupOutput;
  updateLabelType: UpdateLabelTypeOutput;
  updateMachineUser: UpdateMachineUserOutput;
  updateServiceLevelAgreement: UpdateServiceLevelAgreementOutput;
  /** Updates a setting. */
  updateSetting: UpdateSettingOutput;
  updateSnippet: UpdateSnippetOutput;
  updateTenantTier: UpdateTenantTierOutput;
  updateThreadFieldSchema: UpdateThreadFieldSchemaOutput;
  updateThreadTenant: UpdateThreadTenantOutput;
  updateThreadTier: UpdateThreadTierOutput;
  updateThreadTitle: UpdateThreadTitleOutput;
  updateTier: UpdateTierOutput;
  /** Updates a webhook target. */
  updateWebhookTarget: UpdateWebhookTargetOutput;
  updateWorkflowRule: UpdateWorkflowRuleOutput;
  updateWorkspace: UpdateWorkspaceOutput;
  updateWorkspaceEmailSettings: UpdateWorkspaceEmailSettingsOutput;
  /** @deprecated Use syncBusinessHoursSlots instead. */
  upsertBusinessHours: UpsertBusinessHoursOutput;
  upsertCompany: UpsertCompanyOutput;
  /** Creates or updates a customer. */
  upsertCustomer: UpsertCustomerOutput;
  /** Creates or updates a customer group. */
  upsertCustomerGroup: UpsertCustomerGroupOutput;
  upsertMyEmailSignature: UpsertMyEmailSignatureOutput;
  upsertTenant: UpsertTenantOutput;
  upsertThreadField: UpsertThreadFieldOutput;
  verifyWorkspaceEmailDnsSettings: VerifyWorkspaceEmailDnsSettingsOutput;
  verifyWorkspaceEmailForwardingSettings: VerifyWorkspaceEmailForwardingSettingsOutput;
};


export type MutationAcceptWorkspaceInviteArgs = {
  input: AcceptWorkspaceInviteInput;
};


export type MutationAddAdditionalAssigneesArgs = {
  input: AddAdditionalAssigneesInput;
};


export type MutationAddCustomerToCustomerGroupsArgs = {
  input: AddCustomerToCustomerGroupsInput;
};


export type MutationAddCustomerToTenantsArgs = {
  input: AddCustomerToTenantsInput;
};


export type MutationAddLabelsArgs = {
  input: AddLabelsInput;
};


export type MutationAddMembersToTierArgs = {
  input: AddMembersToTierInput;
};


export type MutationAddUserToActiveBillingRotaArgs = {
  input: AddUserToActiveBillingRotaInput;
};


export type MutationAddWorkspaceAlternateSupportEmailAddressArgs = {
  input: AddWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationArchiveLabelTypeArgs = {
  input: ArchiveLabelTypeInput;
};


export type MutationAssignRolesToUserArgs = {
  input: AssignRolesToUserInput;
};


export type MutationAssignThreadArgs = {
  input: AssignThreadInput;
};


export type MutationBulkUpsertThreadFieldsArgs = {
  input: BulkUpsertThreadFieldsInput;
};


export type MutationCalculateRoleChangeCostArgs = {
  input: CalculateRoleChangeCostInput;
};


export type MutationChangeBillingPlanArgs = {
  input: ChangeBillingPlanInput;
};


export type MutationChangeThreadPriorityArgs = {
  input: ChangeThreadPriorityInput;
};


export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};


export type MutationCompleteServiceAuthorizationArgs = {
  input: CompleteServiceAuthorizationInput;
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateAttachmentDownloadUrlArgs = {
  input: CreateAttachmentDownloadUrlInput;
};


export type MutationCreateAttachmentUploadUrlArgs = {
  input: CreateAttachmentUploadUrlInput;
};


export type MutationCreateAutoresponderArgs = {
  input: CreateAutoresponderInput;
};


export type MutationCreateChatAppArgs = {
  input: CreateChatAppInput;
};


export type MutationCreateChatAppSecretArgs = {
  input: CreateChatAppSecretInput;
};


export type MutationCreateCheckoutSessionArgs = {
  input: CreateCheckoutSessionInput;
};


export type MutationCreateCustomerCardConfigArgs = {
  input: CreateCustomerCardConfigInput;
};


export type MutationCreateCustomerEventArgs = {
  input: CreateCustomerEventInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateEmailPreviewUrlArgs = {
  input: CreateEmailPreviewUrlInput;
};


export type MutationCreateIndexedDocumentArgs = {
  input: CreateIndexedDocumentInput;
};


export type MutationCreateLabelTypeArgs = {
  input: CreateLabelTypeInput;
};


export type MutationCreateMachineUserArgs = {
  input: CreateMachineUserInput;
};


export type MutationCreateMyLinearIntegrationArgs = {
  input: CreateMyLinearIntegrationInput;
};


export type MutationCreateMyMsTeamsIntegrationArgs = {
  input: CreateMyMsTeamsIntegrationInput;
};


export type MutationCreateMySlackIntegrationArgs = {
  input: CreateMySlackIntegrationInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateServiceLevelAgreementArgs = {
  input: CreateServiceLevelAgreementInput;
};


export type MutationCreateSnippetArgs = {
  input: CreateSnippetInput;
};


export type MutationCreateThreadArgs = {
  input: CreateThreadInput;
};


export type MutationCreateThreadChannelAssociationArgs = {
  input: CreateThreadChannelAssociationInput;
};


export type MutationCreateThreadDiscussionArgs = {
  input: CreateThreadDiscussionInput;
};


export type MutationCreateThreadEventArgs = {
  input: CreateThreadEventInput;
};


export type MutationCreateThreadFieldSchemaArgs = {
  input: CreateThreadFieldSchemaInput;
};


export type MutationCreateThreadLinkArgs = {
  input: CreateThreadLinkInput;
};


export type MutationCreateTierArgs = {
  input: CreateTierInput;
};


export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
};


export type MutationCreateUserAuthSlackIntegrationArgs = {
  input: CreateUserAuthSlackIntegrationInput;
};


export type MutationCreateWebhookTargetArgs = {
  input: CreateWebhookTargetInput;
};


export type MutationCreateWorkflowRuleArgs = {
  input: CreateWorkflowRuleInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationCreateWorkspaceDiscordIntegrationArgs = {
  input: CreateWorkspaceDiscordIntegrationInput;
};


export type MutationCreateWorkspaceEmailDomainSettingsArgs = {
  input: CreateWorkspaceEmailDomainSettingsInput;
};


export type MutationCreateWorkspaceMsTeamsIntegrationArgs = {
  input: CreateWorkspaceMsTeamsIntegrationInput;
};


export type MutationCreateWorkspaceSlackChannelIntegrationArgs = {
  input: CreateWorkspaceSlackChannelIntegrationInput;
};


export type MutationCreateWorkspaceSlackIntegrationArgs = {
  input: CreateWorkspaceSlackIntegrationInput;
};


export type MutationDeleteApiKeyArgs = {
  input: DeleteApiKeyInput;
};


export type MutationDeleteAutoresponderArgs = {
  input: DeleteAutoresponderInput;
};


export type MutationDeleteChatAppArgs = {
  input: DeleteChatAppInput;
};


export type MutationDeleteChatAppSecretArgs = {
  input: DeleteChatAppSecretInput;
};


export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


export type MutationDeleteCustomerCardConfigArgs = {
  input: DeleteCustomerCardConfigInput;
};


export type MutationDeleteCustomerGroupArgs = {
  input: DeleteCustomerGroupInput;
};


export type MutationDeleteIndexedDocumentArgs = {
  input: DeleteIndexedDocumentInput;
};


export type MutationDeleteMachineUserArgs = {
  input: DeleteMachineUserInput;
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


export type MutationDeleteServiceAuthorizationArgs = {
  input: DeleteServiceAuthorizationInput;
};


export type MutationDeleteServiceLevelAgreementArgs = {
  input: DeleteServiceLevelAgreementInput;
};


export type MutationDeleteSnippetArgs = {
  input: DeleteSnippetInput;
};


export type MutationDeleteThreadChannelAssociationArgs = {
  input: DeleteThreadChannelAssociationInput;
};


export type MutationDeleteThreadFieldArgs = {
  input: DeleteThreadFieldInput;
};


export type MutationDeleteThreadFieldSchemaArgs = {
  input: DeleteThreadFieldSchemaInput;
};


export type MutationDeleteThreadLinkArgs = {
  input: DeleteThreadLinkInput;
};


export type MutationDeleteTierArgs = {
  input: DeleteTierInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteUserAuthSlackIntegrationArgs = {
  input: DeleteUserAuthSlackIntegrationInput;
};


export type MutationDeleteWebhookTargetArgs = {
  input: DeleteWebhookTargetInput;
};


export type MutationDeleteWorkflowRuleArgs = {
  input: DeleteWorkflowRuleInput;
};


export type MutationDeleteWorkspaceDiscordIntegrationArgs = {
  input: DeleteWorkspaceDiscordIntegrationInput;
};


export type MutationDeleteWorkspaceInviteArgs = {
  input: DeleteWorkspaceInviteInput;
};


export type MutationDeleteWorkspaceMsTeamsIntegrationArgs = {
  input: DeleteWorkspaceMsTeamsIntegrationInput;
};


export type MutationDeleteWorkspaceSlackChannelIntegrationArgs = {
  input: DeleteWorkspaceSlackChannelIntegrationInput;
};


export type MutationDeleteWorkspaceSlackIntegrationArgs = {
  input: DeleteWorkspaceSlackIntegrationInput;
};


export type MutationForkThreadArgs = {
  input: ForkThreadInput;
};


export type MutationInviteUserToWorkspaceArgs = {
  input: InviteUserToWorkspaceInput;
};


export type MutationMarkCustomerAsSpamArgs = {
  input: MarkCustomerAsSpamInput;
};


export type MutationMarkThreadAsDoneArgs = {
  input: MarkThreadAsDoneInput;
};


export type MutationMarkThreadAsTodoArgs = {
  input: MarkThreadAsTodoInput;
};


export type MutationMarkThreadDiscussionAsResolvedArgs = {
  input: MarkThreadDiscussionAsResolvedInput;
};


export type MutationPreviewBillingPlanChangeArgs = {
  input: PreviewBillingPlanChangeInput;
};


export type MutationReloadCustomerCardInstanceArgs = {
  input: ReloadCustomerCardInstanceInput;
};


export type MutationRemoveAdditionalAssigneesArgs = {
  input: RemoveAdditionalAssigneesInput;
};


export type MutationRemoveCustomerFromCustomerGroupsArgs = {
  input: RemoveCustomerFromCustomerGroupsInput;
};


export type MutationRemoveCustomerFromTenantsArgs = {
  input: RemoveCustomerFromTenantsInput;
};


export type MutationRemoveLabelsArgs = {
  input: RemoveLabelsInput;
};


export type MutationRemoveMembersFromTierArgs = {
  input: RemoveMembersFromTierInput;
};


export type MutationRemoveUserFromActiveBillingRotaArgs = {
  input: RemoveUserFromActiveBillingRotaInput;
};


export type MutationRemoveWorkspaceAlternateSupportEmailAddressArgs = {
  input: RemoveWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationReorderAutorespondersArgs = {
  input: ReorderAutorespondersInput;
};


export type MutationReorderCustomerCardConfigsArgs = {
  input: ReorderCustomerCardConfigsInput;
};


export type MutationReorderThreadFieldSchemasArgs = {
  input: ReorderThreadFieldSchemasInput;
};


export type MutationReplyToEmailArgs = {
  input: ReplyToEmailInput;
};


export type MutationReplyToThreadArgs = {
  input: ReplyToThreadInput;
};


export type MutationSendBulkEmailArgs = {
  input: SendBulkEmailInput;
};


export type MutationSendChatArgs = {
  input: SendChatInput;
};


export type MutationSendCustomerChatArgs = {
  input: SendCustomerChatInput;
};


export type MutationSendMsTeamsMessageArgs = {
  input: SendMsTeamsMessageInput;
};


export type MutationSendNewEmailArgs = {
  input: SendNewEmailInput;
};


export type MutationSendSlackMessageArgs = {
  input: SendSlackMessageInput;
};


export type MutationSendThreadDiscussionMessageArgs = {
  input: SendThreadDiscussionMessageInput;
};


export type MutationSetCustomerTenantsArgs = {
  input: SetCustomerTenantsInput;
};


export type MutationShareThreadToUserInSlackArgs = {
  input: ShareThreadToUserInSlackInput;
};


export type MutationSnoozeThreadArgs = {
  input: SnoozeThreadInput;
};


export type MutationStartServiceAuthorizationArgs = {
  input: StartServiceAuthorizationInput;
};


export type MutationSyncBusinessHoursSlotsArgs = {
  input: SyncBusinessHoursSlotsInput;
};


export type MutationToggleSlackMessageReactionArgs = {
  input: ToggleSlackMessageReactionInput;
};


export type MutationUnarchiveLabelTypeArgs = {
  input: UnarchiveLabelTypeInput;
};


export type MutationUnassignThreadArgs = {
  input: UnassignThreadInput;
};


export type MutationUnmarkCustomerAsSpamArgs = {
  input: UnmarkCustomerAsSpamInput;
};


export type MutationUpdateActiveBillingRotaArgs = {
  input: UpdateActiveBillingRotaInput;
};


export type MutationUpdateAutoresponderArgs = {
  input: UpdateAutoresponderInput;
};


export type MutationUpdateChatAppArgs = {
  input: UpdateChatAppInput;
};


export type MutationUpdateCompanyTierArgs = {
  input: UpdateCompanyTierInput;
};


export type MutationUpdateConnectedSlackChannelArgs = {
  input: UpdateConnectedSlackChannelInput;
};


export type MutationUpdateCustomerCardConfigArgs = {
  input: UpdateCustomerCardConfigInput;
};


export type MutationUpdateCustomerCompanyArgs = {
  input: UpdateCustomerCompanyInput;
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};


export type MutationUpdateLabelTypeArgs = {
  input: UpdateLabelTypeInput;
};


export type MutationUpdateMachineUserArgs = {
  input: UpdateMachineUserInput;
};


export type MutationUpdateServiceLevelAgreementArgs = {
  input: UpdateServiceLevelAgreementInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationUpdateSnippetArgs = {
  input: UpdateSnippetInput;
};


export type MutationUpdateTenantTierArgs = {
  input: UpdateTenantTierInput;
};


export type MutationUpdateThreadFieldSchemaArgs = {
  input: UpdateThreadFieldSchemaInput;
};


export type MutationUpdateThreadTenantArgs = {
  input: UpdateThreadTenantInput;
};


export type MutationUpdateThreadTierArgs = {
  input: UpdateThreadTierInput;
};


export type MutationUpdateThreadTitleArgs = {
  input: UpdateThreadTitleInput;
};


export type MutationUpdateTierArgs = {
  input: UpdateTierInput;
};


export type MutationUpdateWebhookTargetArgs = {
  input: UpdateWebhookTargetInput;
};


export type MutationUpdateWorkflowRuleArgs = {
  input: UpdateWorkflowRuleInput;
};


export type MutationUpdateWorkspaceArgs = {
  input: UpdateWorkspaceInput;
};


export type MutationUpdateWorkspaceEmailSettingsArgs = {
  input: UpdateWorkspaceEmailSettingsInput;
};


export type MutationUpsertBusinessHoursArgs = {
  input: UpsertBusinessHoursInput;
};


export type MutationUpsertCompanyArgs = {
  input: UpsertCompanyInput;
};


export type MutationUpsertCustomerArgs = {
  input: UpsertCustomerInput;
};


export type MutationUpsertCustomerGroupArgs = {
  input: UpsertCustomerGroupInput;
};


export type MutationUpsertMyEmailSignatureArgs = {
  input: UpsertMyEmailSignatureInput;
};


export type MutationUpsertTenantArgs = {
  input: UpsertTenantInput;
};


export type MutationUpsertThreadFieldArgs = {
  input: UpsertThreadFieldInput;
};


export type MutationVerifyWorkspaceEmailForwardingSettingsArgs = {
  input: VerifyWorkspaceEmailForwardingSettingsInput;
};

/** A type indicating an error has occurred while making a mutation. */
export type MutationError = {
  __typename: 'MutationError';
  /** A fixed error code that can be used to handle this error, see https://www.plain.com/docs/graphql-api/error-codes for a description of each code. */
  code: Scalars['String']['output'];
  /** The array of fields that are impacted by this error. */
  fields: Array<MutationFieldError>;
  /** An English technical description of the error. This error is usually meant to be read by a developer and not an end user. */
  message: Scalars['String']['output'];
  /** The type of error. Can be used to display a user friendly error message. */
  type: MutationErrorType;
};

/** An enum for why the mutation failed overall. */
export enum MutationErrorType {
  /** The user is not authorized to do this mutation. See `message` for details on which permissions are missing. */
  Forbidden = 'FORBIDDEN',
  /** An unknown internal server error occurred. Retry the mutation and if it persists, please email help@plain.com */
  Internal = 'INTERNAL',
  /** Input validation failed, see the `fields` for details on why the input was invalid. */
  Validation = 'VALIDATION'
}

/** A type indicating an error has occurred with a specific field in the input. */
export type MutationFieldError = {
  __typename: 'MutationFieldError';
  /** The name of the field for which the error happened. */
  field: Scalars['String']['output'];
  /** An English technical description of the error. This error is usually meant to be read by a developer and not an end user. */
  message: Scalars['String']['output'];
  /** The type of the error. Can be used to display a user friendly error message. */
  type: MutationFieldErrorType;
};

/** An enum specific to each field, explaining why validation failed. */
export enum MutationFieldErrorType {
  /** The input field referenced an entity that wasn't found. */
  NotFound = 'NOT_FOUND',
  /** The field is required to be provided. String inputs may be trimmed and checked for emptiness. */
  Required = 'REQUIRED',
  /** The field was provided, but didn't pass the requirements of the field. See `message` for details on why. */
  Validation = 'VALIDATION'
}

export type NextResponseTimeServiceLevelAgreement = ServiceLevelAgreement & {
  __typename: 'NextResponseTimeServiceLevelAgreement';
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  /** This SLA will breach if it does not receive a next response within this many minutes. */
  nextResponseTimeMinutes: Scalars['Int']['output'];
  threadPriorityFilter: Array<Scalars['Int']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  useBusinessHoursOnly: Scalars['Boolean']['output'];
};

export type Note = {
  __typename: 'Note';
  createdAt: DateTime;
  createdBy: InternalActor;
  customer: Customer;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<InternalActor>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  markdown?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type NoteEntry = {
  __typename: 'NoteEntry';
  markdown?: Maybe<Scalars['String']['output']>;
  noteId: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

/** A number setting */
export type NumberSetting = {
  __typename: 'NumberSetting';
  /** The setting code. */
  code: Scalars['String']['output'];
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  numberValue: Scalars['Int']['output'];
  /** The scope of the setting. */
  scope: SettingScope;
};

export type OptionalBooleanInput = {
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptionalDependsOnThreadFieldInput = {
  value?: InputMaybe<DependsOnThreadFieldInput>;
};

export type OptionalStringInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaymentMethod = {
  __typename: 'PaymentMethod';
  isAvailable: Scalars['Boolean']['output'];
};

export type PerSeatRecurringPrice = RecurringPrice & {
  __typename: 'PerSeatRecurringPrice';
  billingIntervalCount: Scalars['Int']['output'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
  perSeatAmount: Scalars['Int']['output'];
};

export type Permissions = {
  __typename: 'Permissions';
  permissions: Array<Scalars['String']['output']>;
};

export type PreviewBillingPlanChangeInput = {
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  planKey: BillingPlanKey;
};

export type PreviewBillingPlanChangeOutput = {
  __typename: 'PreviewBillingPlanChangeOutput';
  error?: Maybe<MutationError>;
  preview?: Maybe<BillingPlanChangePreview>;
};

export type Price = {
  __typename: 'Price';
  amount: Scalars['Int']['output'];
  currency: CurrencyCode;
};

export type PriceTier = {
  __typename: 'PriceTier';
  flatAmount: Scalars['Int']['output'];
  maxSeats: Scalars['Int']['output'];
  perSeatAmount: Scalars['Int']['output'];
};

export type Query = {
  __typename: 'Query';
  autoresponder?: Maybe<Autoresponder>;
  autoresponders: AutoresponderConnection;
  billingPlans: BillingPlanConnection;
  /** @deprecated Use businessHoursSlots instead. */
  businessHours?: Maybe<BusinessHours>;
  businessHoursSlots: Array<BusinessHoursSlot>;
  /** Get a chat app by id. */
  chatApp?: Maybe<ChatApp>;
  /** Get a chat app secret by chat app id. */
  chatAppSecret?: Maybe<ChatAppHiddenSecret>;
  /** List chat apps. */
  chatApps: ChatAppConnection;
  companies: CompanyConnection;
  company?: Maybe<Company>;
  connectedSlackChannel?: Maybe<ConnectedSlackChannel>;
  /** Gets all slack channels for this workspace, which match the specified filters. */
  connectedSlackChannels: ConnectedSlackChannelConnection;
  customer?: Maybe<Customer>;
  customerByEmail?: Maybe<Customer>;
  /** Get a customer by its external ID. A customer's external ID is unique within a workspace. */
  customerByExternalId?: Maybe<Customer>;
  customerCardConfig?: Maybe<CustomerCardConfig>;
  customerCardConfigs: Array<CustomerCardConfig>;
  /**
   * Loads the customer's card instances.
   *
   * This query will return any cards that are loaded and within their expiry time.
   * For cards that are past their expiry or are errored it will request a load of the cards and
   * return a `CustomerCardInstanceLoading`.
   *
   * A maximum of 25 card instances will be returned, due to only allowing 25 customer card configs.
   */
  customerCardInstances: Array<CustomerCardInstance>;
  /** Get a customer group by ID. */
  customerGroup?: Maybe<CustomerGroup>;
  /** Get a paginated list of customer groups. */
  customerGroups: CustomerGroupConnection;
  customers: CustomerConnection;
  /** This API is in beta and may change without notice. */
  generateReply: GeneratedReply;
  indexedDocuments: IndexedDocumentConnection;
  labelType?: Maybe<LabelType>;
  labelTypes: LabelTypeConnection;
  machineUser?: Maybe<MachineUser>;
  machineUsers: MachineUserConnection;
  myBillingRota?: Maybe<BillingRota>;
  myBillingSubscription?: Maybe<BillingSubscription>;
  myEmailSignature?: Maybe<EmailSignature>;
  myJiraIntegrationToken?: Maybe<JiraIntegrationToken>;
  myLinearInstallationInfo: UserLinearInstallationInfo;
  myLinearIntegration?: Maybe<UserLinearIntegration>;
  myLinearIntegrationToken?: Maybe<LinearIntegrationToken>;
  myMSTeamsInstallationInfo: UserMsTeamsInstallationInfo;
  myMSTeamsIntegration?: Maybe<UserMsTeamsIntegration>;
  myMachineUser?: Maybe<MachineUser>;
  myPaymentMethod?: Maybe<PaymentMethod>;
  myPermissions: Permissions;
  mySlackInstallationInfo: UserSlackInstallationInfo;
  mySlackIntegration?: Maybe<UserSlackIntegration>;
  myUser?: Maybe<User>;
  myUserAccount?: Maybe<UserAccount>;
  myWorkspace?: Maybe<Workspace>;
  myWorkspaceInvites: WorkspaceInviteConnection;
  myWorkspaces: WorkspaceConnection;
  permissions: Permissions;
  /** This API is in beta and may change without notice. */
  relatedThreads: Array<ThreadWithDistance>;
  roles: RoleConnection;
  searchCompanies: CompanySearchResultConnection;
  /**
   * Search for customers based on the provided query. Returned customers are sorted by how recently
   * they changed status (most recent first).
   */
  searchCustomers: CustomerSearchConnection;
  /**
   * Searches for slack users in a slack channel based on a search term.
   * The search term can be part of either the slack's handle or full name.
   */
  searchSlackUsers: SlackUserConnection;
  searchTenants: TenantSearchResultConnection;
  /**
   * Searches for slack users in a thread based on a search term.
   * The search term can be part of either the slack's handle or full name.
   */
  searchThreadSlackUsers: SlackUserConnection;
  searchThreads: ThreadSearchResultConnection;
  serviceAuthorization?: Maybe<ServiceAuthorization>;
  serviceAuthorizations: ServiceAuthorizationConnection;
  /** Gets a single setting based on the code and the scope. */
  setting?: Maybe<Setting>;
  singleValueMetric?: Maybe<SingleValueMetric>;
  /** Gets a single slack user within a channel based on their slack user ID. */
  slackUser?: Maybe<SlackUser>;
  snippet?: Maybe<Snippet>;
  snippets: SnippetConnection;
  /** List all the events types you can subscribe to. */
  subscriptionEventTypes: Array<SubscriptionEventType>;
  tenant?: Maybe<Tenant>;
  tenants: TenantConnection;
  /** Get a thread by its ID. */
  thread?: Maybe<Thread>;
  /** Get a thread by its external ID. A thread's external ID is unique within a customer, hence why the customer ID is required. */
  threadByExternalId?: Maybe<Thread>;
  /** This API is in beta and may change without notice. */
  threadClusters: Array<ThreadCluster>;
  threadDiscussion?: Maybe<ThreadDiscussion>;
  threadFieldSchema?: Maybe<ThreadFieldSchema>;
  threadFieldSchemas: ThreadFieldSchemaConnection;
  threadLinkGroups: ThreadLinkGroupConnection;
  /** Gets a single slack user within a thread based on their slack user ID. */
  threadSlackUser?: Maybe<SlackUser>;
  threads: ThreadConnection;
  tier?: Maybe<Tier>;
  tiers: TierConnection;
  timeSeriesMetric?: Maybe<TimeSeriesMetric>;
  timelineEntries: TimelineEntryConnection;
  timelineEntry?: Maybe<TimelineEntry>;
  user?: Maybe<User>;
  userAuthSlackInstallationInfo: UserAuthSlackInstallationInfo;
  userAuthSlackIntegration?: Maybe<UserAuthSlackIntegration>;
  userAuthSlackIntegrationByThreadId?: Maybe<UserAuthSlackIntegration>;
  /**
   * Returns a user by email or null if the user is not found.
   *
   * Deleted users are also returned, see isDeleted, deletedAt and deletedBy fields on the User type.
   */
  userByEmail?: Maybe<User>;
  users: UserConnection;
  /** Gets a webhook target. */
  webhookTarget?: Maybe<WebhookTarget>;
  /** List webhook targets. */
  webhookTargets: WebhookTargetConnection;
  /** List webhook versions. */
  webhookVersions: WebhookVersionConnection;
  /** Get a workflow rule by id. */
  workflowRule?: Maybe<WorkflowRule>;
  /** List workflow rules. */
  workflowRules: WorkflowRuleConnection;
  workspace?: Maybe<Workspace>;
  workspaceChatSettings: WorkspaceChatSettings;
  workspaceDiscordIntegration?: Maybe<WorkspaceDiscordIntegration>;
  workspaceDiscordIntegrations: WorkspaceDiscordIntegrationConnection;
  workspaceEmailSettings: WorkspaceEmailSettings;
  workspaceHmac?: Maybe<WorkspaceHmac>;
  workspaceInvites: WorkspaceInviteConnection;
  workspaceMSTeamsInstallationInfo: WorkspaceMsTeamsInstallationInfo;
  workspaceMSTeamsIntegration?: Maybe<WorkspaceMsTeamsIntegration>;
  workspaceSlackChannelInstallationInfo: WorkspaceSlackChannelInstallationInfo;
  workspaceSlackChannelIntegration?: Maybe<WorkspaceSlackChannelIntegration>;
  workspaceSlackChannelIntegrations: WorkspaceSlackChannelIntegrationConnection;
  workspaceSlackInstallationInfo: WorkspaceSlackInstallationInfo;
  workspaceSlackIntegration?: Maybe<WorkspaceSlackIntegration>;
  workspaceSlackIntegrations: WorkspaceSlackIntegrationConnection;
};


export type QueryAutoresponderArgs = {
  autoresponderId: Scalars['ID']['input'];
};


export type QueryAutorespondersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBillingPlansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChatAppArgs = {
  chatAppId: Scalars['ID']['input'];
};


export type QueryChatAppSecretArgs = {
  chatAppId: Scalars['ID']['input'];
};


export type QueryChatAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CompaniesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyArgs = {
  companyId: Scalars['ID']['input'];
};


export type QueryConnectedSlackChannelArgs = {
  connectedSlackChannelId: Scalars['ID']['input'];
};


export type QueryConnectedSlackChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ConnectedSlackChannelsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryCustomerByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryCustomerByExternalIdArgs = {
  externalId: Scalars['ID']['input'];
};


export type QueryCustomerCardConfigArgs = {
  customerCardConfigId: Scalars['ID']['input'];
};


export type QueryCustomerCardInstancesArgs = {
  customerId: Scalars['ID']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCustomerGroupArgs = {
  customerGroupId: Scalars['ID']['input'];
};


export type QueryCustomerGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CustomerGroupsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CustomersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CustomersSort>;
};


export type QueryGenerateReplyArgs = {
  prompt?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
};


export type QueryIndexedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLabelTypeArgs = {
  labelTypeId: Scalars['ID']['input'];
};


export type QueryLabelTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<LabelTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMachineUserArgs = {
  machineUserId: Scalars['ID']['input'];
};


export type QueryMachineUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyLinearInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryMyMsTeamsInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryMySlackInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryMyWorkspaceInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyWorkspacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRelatedThreadsArgs = {
  threadId: Scalars['ID']['input'];
  variant?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: CompaniesSearchQuery;
};


export type QuerySearchCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: CustomersSearchQuery;
};


export type QuerySearchSlackUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: Scalars['String']['input'];
  slackChannelId: Scalars['String']['input'];
  slackTeamId: Scalars['String']['input'];
};


export type QuerySearchTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: TenantsSearchQuery;
};


export type QuerySearchThreadSlackUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};


export type QuerySearchThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: ThreadsSearchQuery;
};


export type QueryServiceAuthorizationArgs = {
  serviceAuthorizationId: Scalars['ID']['input'];
};


export type QueryServiceAuthorizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ServiceAuthorizationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySettingArgs = {
  code: Scalars['String']['input'];
  scope: SettingScopeInput;
};


export type QuerySingleValueMetricArgs = {
  name: Scalars['String']['input'];
  options?: InputMaybe<SingleValueMetricOptions>;
};


export type QuerySlackUserArgs = {
  slackChannelId: Scalars['String']['input'];
  slackTeamId: Scalars['String']['input'];
  slackUserId: Scalars['ID']['input'];
};


export type QuerySnippetArgs = {
  snippetId: Scalars['ID']['input'];
};


export type QuerySnippetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTenantArgs = {
  tenantId: Scalars['ID']['input'];
};


export type QueryTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryThreadByExternalIdArgs = {
  customerId: Scalars['ID']['input'];
  externalId: Scalars['ID']['input'];
};


export type QueryThreadClustersArgs = {
  variant?: InputMaybe<Scalars['String']['input']>;
};


export type QueryThreadDiscussionArgs = {
  threadDiscussionId: Scalars['ID']['input'];
};


export type QueryThreadFieldSchemaArgs = {
  threadFieldSchemaId: Scalars['ID']['input'];
};


export type QueryThreadFieldSchemasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadLinkGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadLinkGroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadSlackUserArgs = {
  slackUserId: Scalars['ID']['input'];
  threadId: Scalars['ID']['input'];
};


export type QueryThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ThreadsSort>;
};


export type QueryTierArgs = {
  tierId: Scalars['ID']['input'];
};


export type QueryTiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeSeriesMetricArgs = {
  name: Scalars['String']['input'];
  options?: InputMaybe<TimeSeriesMetricOptions>;
};


export type QueryTimelineEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimelineEntryArgs = {
  customerId: Scalars['ID']['input'];
  timelineEntryId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUserAuthSlackInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
  slackTeamId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserAuthSlackIntegrationArgs = {
  slackTeamId: Scalars['String']['input'];
};


export type QueryUserAuthSlackIntegrationByThreadIdArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWebhookTargetArgs = {
  webhookTargetId: Scalars['ID']['input'];
};


export type QueryWebhookTargetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWebhookVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkflowRuleArgs = {
  workflowRuleId: Scalars['ID']['input'];
};


export type QueryWorkflowRulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceArgs = {
  workspaceId: Scalars['ID']['input'];
};


export type QueryWorkspaceDiscordIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryWorkspaceDiscordIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceMsTeamsInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryWorkspaceSlackChannelInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryWorkspaceSlackChannelIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryWorkspaceSlackChannelIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceSlackInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryWorkspaceSlackIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryWorkspaceSlackIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RecurringPrice = {
  billingIntervalCount: Scalars['Int']['output'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
};

export type RegenerateWorkspaceHmacOutput = {
  __typename: 'RegenerateWorkspaceHmacOutput';
  error?: Maybe<MutationError>;
  workspaceHmac?: Maybe<WorkspaceHmac>;
};

export type ReloadCustomerCardInstanceInput = {
  customerCardConfigId: Scalars['ID']['input'];
  customerId: Scalars['ID']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReloadCustomerCardInstanceOutput = {
  __typename: 'ReloadCustomerCardInstanceOutput';
  /** The reloaded customer card instance. Currently this will always be a `CustomerCardInstanceLoading` type. */
  customerCardInstance?: Maybe<CustomerCardInstance>;
  error?: Maybe<MutationError>;
};

export type RemoveAdditionalAssigneesInput = {
  machineUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  threadId: Scalars['ID']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type RemoveAdditionalAssigneesOutput = {
  __typename: 'RemoveAdditionalAssigneesOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type RemoveCustomerFromCustomerGroupsInput = {
  customerGroupIdentifiers: Array<CustomerGroupIdentifier>;
  customerId: Scalars['ID']['input'];
};

export type RemoveCustomerFromCustomerGroupsOutput = {
  __typename: 'RemoveCustomerFromCustomerGroupsOutput';
  error?: Maybe<MutationError>;
};

export type RemoveCustomerFromTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type RemoveCustomerFromTenantsOutput = {
  __typename: 'RemoveCustomerFromTenantsOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type RemoveLabelsInput = {
  labelIds: Array<Scalars['ID']['input']>;
};

export type RemoveLabelsOutput = {
  __typename: 'RemoveLabelsOutput';
  error?: Maybe<MutationError>;
};

export type RemoveMembersFromTierInput = {
  memberIdentifiers: Array<TierMemberIdentifierInput>;
};

export type RemoveMembersFromTierOutput = {
  __typename: 'RemoveMembersFromTierOutput';
  error?: Maybe<MutationError>;
  memberships: Array<TierMembership>;
};

export type RemoveUserFromActiveBillingRotaInput = {
  userId: Scalars['ID']['input'];
};

export type RemoveUserFromActiveBillingRotaOutput = {
  __typename: 'RemoveUserFromActiveBillingRotaOutput';
  billingRota?: Maybe<BillingRota>;
  error?: Maybe<MutationError>;
};

export type RemoveWorkspaceAlternateSupportEmailAddressInput = {
  alternateSupportEmailAddress: Scalars['String']['input'];
};

export type RemoveWorkspaceAlternateSupportEmailAddressOutput = {
  __typename: 'RemoveWorkspaceAlternateSupportEmailAddressOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type ReorderAutorespondersInput = {
  autorespondersOrder: Array<AutoresponderOrderInput>;
};

export type ReorderAutorespondersOutput = {
  __typename: 'ReorderAutorespondersOutput';
  autoresponders?: Maybe<Array<Autoresponder>>;
  error?: Maybe<MutationError>;
};

export type ReorderCustomerCardConfigsInput = {
  /** An array of ordering updates. */
  customerCardConfigOrders: Array<CustomerCardConfigOrderInput>;
};

export type ReorderCustomerCardConfigsOutput = {
  __typename: 'ReorderCustomerCardConfigsOutput';
  /** The reordered customer card configs. */
  customerCardConfigs?: Maybe<Array<CustomerCardConfig>>;
  error?: Maybe<MutationError>;
};

export type ReorderThreadFieldSchemasInput = {
  threadFieldSchemaOrders: Array<ThreadFieldSchemaOrderInput>;
};

export type ReorderThreadFieldSchemasOutput = {
  __typename: 'ReorderThreadFieldSchemasOutput';
  error?: Maybe<MutationError>;
  threadFieldSchemas?: Maybe<Array<ThreadFieldSchema>>;
};

export type ReplyToEmailInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  /**
   * Optional field for alternate from email address. If provided, it will be used as the from address in the email.
   * It must match one of the workspace support email addresses (default or alternate).
   */
  fromAlternateSupportEmail?: InputMaybe<EmailParticipantInput>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  inReplyToEmailId: Scalars['ID']['input'];
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  textContent: Scalars['String']['input'];
};

export type ReplyToEmailOutput = {
  __typename: 'ReplyToEmailOutput';
  email?: Maybe<Email>;
  error?: Maybe<MutationError>;
};

export type ReplyToThreadChannelSpecificOptionsInput = {
  email: ReplyToThreadEmailChannelSpecificOptionsInput;
};

export type ReplyToThreadEmailChannelSpecificOptionsInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
};

export type ReplyToThreadInput = {
  channelSpecificOptions?: InputMaybe<ReplyToThreadChannelSpecificOptionsInput>;
  impersonation?: InputMaybe<ImpersonationInput>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  textContent: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};

export type ReplyToThreadOutput = {
  __typename: 'ReplyToThreadOutput';
  error?: Maybe<MutationError>;
};

export type Role = {
  __typename: 'Role';
  /** @deprecated Don't use. Will be removed soon. */
  assignableBillingSeats: Array<BillingSeatType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated Use isAssignableToThread instead */
  isAssignableToCustomer: Scalars['Boolean']['output'];
  isAssignableToThread: Scalars['Boolean']['output'];
  key?: Maybe<RoleKey>;
  name: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  /** @deprecated Don't use. Will be removed soon. */
  requiresBillableSeat: Scalars['Boolean']['output'];
};

export type RoleChangeCost = {
  __typename: 'RoleChangeCost';
  addingSeatType: BillingSeatType;
  intervalCount: Scalars['Int']['output'];
  intervalUnit: BillingIntervalUnit;
  removingSeatType?: Maybe<BillingSeatType>;
  totalPrice: Price;
};

export type RoleConnection = {
  __typename: 'RoleConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename: 'RoleEdge';
  cursor: Scalars['String']['output'];
  node: Role;
};

export enum RoleKey {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  Support = 'SUPPORT',
  Viewer = 'VIEWER'
}

export type SendBulkEmailInput = {
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  textContent: Scalars['String']['input'];
  threadIds: Array<Scalars['ID']['input']>;
};

export type SendBulkEmailOutput = {
  __typename: 'SendBulkEmailOutput';
  error?: Maybe<MutationError>;
};

export type SendChatInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type SendChatOutput = {
  __typename: 'SendChatOutput';
  chat?: Maybe<Chat>;
  error?: Maybe<MutationError>;
};

export type SendCustomerChatInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
};

export type SendCustomerChatOutput = {
  __typename: 'SendCustomerChatOutput';
  chat?: Maybe<Chat>;
  error?: Maybe<MutationError>;
};

export type SendMsTeamsMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
};

export type SendMsTeamsMessageOutput = {
  __typename: 'SendMSTeamsMessageOutput';
  error?: Maybe<MutationError>;
  msTeamsMessage?: Maybe<MsTeamsMessage>;
};

export type SendNewEmailInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  /**
   * Optional field for alternate from email address. If provided, it will be used as the from address in the email.
   * It must match one of the workspace support email addresses (default or alternate).
   */
  fromAlternateSupportEmail?: InputMaybe<EmailParticipantInput>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  textContent: Scalars['String']['input'];
  /** If provided this will add the new email to an existing thread. If not provided, a new thread will be created. */
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type SendNewEmailOutput = {
  __typename: 'SendNewEmailOutput';
  email?: Maybe<Email>;
  error?: Maybe<MutationError>;
};

export type SendSlackMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use markdownContent instead */
  textContent?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
};

export type SendSlackMessageOutput = {
  __typename: 'SendSlackMessageOutput';
  error?: Maybe<MutationError>;
};

export type SendThreadDiscussionMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  markdownContent: Scalars['String']['input'];
  threadDiscussionId: Scalars['ID']['input'];
};

export type SendThreadDiscussionMessageOutput = {
  __typename: 'SendThreadDiscussionMessageOutput';
  error?: Maybe<MutationError>;
  threadDiscussionMessage?: Maybe<ThreadDiscussionMessage>;
};

export type ServiceAuthorization = {
  __typename: 'ServiceAuthorization';
  connectedAt: DateTime;
  connectedBy: InternalActor;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  serviceIntegration: ServiceIntegration;
  status: ServiceAuthorizationStatus;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ServiceAuthorizationConnection = {
  __typename: 'ServiceAuthorizationConnection';
  edges: Array<ServiceAuthorizationEdge>;
  pageInfo: PageInfo;
};

export type ServiceAuthorizationConnectionDetails = {
  __typename: 'ServiceAuthorizationConnectionDetails';
  hmacDigest: Scalars['String']['output'];
  serviceAuthorizationId: Scalars['ID']['output'];
  /** One of: zendesk, salesforce, freshdesk, helpscout-mailbox, hubspot, jira. */
  serviceIntegrationKey: Scalars['String']['output'];
};

export type ServiceAuthorizationEdge = {
  __typename: 'ServiceAuthorizationEdge';
  cursor: Scalars['String']['output'];
  node: ServiceAuthorization;
};

/**
 * The status of the service authorization. The status transitions are as follows:
 * PENDING_AUTH → COMPLETE_AUTH → CONNECTED ↔ REINSTALL_REQUIRED
 *
 * There is no
 */
export enum ServiceAuthorizationStatus {
  /**
   * User has completed the service authorization, but the service is not yet ready for use.
   * This happens when the service requires additional configuration (e.g. creating webhooks
   * in the service).
   * This is a transient state that typically lasts for a few seconds. Plain will automatically
   * attempt to configure the service, and transition to CONNECTED or REINSTALL_REQUIRED.
   */
  CompletedAuth = 'COMPLETED_AUTH',
  /** Service authorization is connected and ready for use. */
  Connected = 'CONNECTED',
  /** Service authorization was requested, but the user has not yet completed the authorization. */
  PendingAuth = 'PENDING_AUTH',
  /**
   * Service authorization was revoked, this typically happen when the Plain integration is removed
   * from the service. Plain keeps the service authorization to allow for reconnection without
   * losing the service's configuration.
   */
  ReinstallRequired = 'REINSTALL_REQUIRED'
}

export type ServiceAuthorizationsFilter = {
  /** One of: zendesk, salesforce, freshdesk, helpscout-mailbox, hubspot, jira. */
  serviceIntegrationKey?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceIntegration = {
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ServiceLevelAgreement = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  /** This SLA can only be applied to a thread if it has one of these priority values. */
  threadPriorityFilter: Array<Scalars['Int']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly: Scalars['Boolean']['output'];
};

export type ServiceLevelAgreementFilter = {
  statuses?: InputMaybe<Array<ServiceLevelAgreementStatus>>;
  types?: InputMaybe<Array<ServiceLevelAgreementType>>;
};

export type ServiceLevelAgreementInput = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions: Array<BreachActionInput>;
  /** Set this to configure the firt response time SLA. */
  firstResponseTimeMinutes?: InputMaybe<Scalars['Int']['input']>;
  /** Set this to configure an SLA for next responses. */
  nextResponseTimeMinutes?: InputMaybe<Scalars['Int']['input']>;
  /** This SLA can only be applied to a thread if it has one of these priority values. If not provided, it defaults to all priorities (0, 1, 2 and 3). */
  threadPriorityFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly: Scalars['Boolean']['input'];
};

export enum ServiceLevelAgreementStatus {
  Achieved = 'ACHIEVED',
  Breached = 'BREACHED',
  Breaching = 'BREACHING',
  Cancelled = 'CANCELLED',
  ImminentBreach = 'IMMINENT_BREACH',
  Pending = 'PENDING'
}

export type ServiceLevelAgreementStatusDetail = ServiceLevelAgreementStatusDetailAchieved | ServiceLevelAgreementStatusDetailBreached | ServiceLevelAgreementStatusDetailBreaching | ServiceLevelAgreementStatusDetailCancelled | ServiceLevelAgreementStatusDetailImminentBreach | ServiceLevelAgreementStatusDetailPending;

export type ServiceLevelAgreementStatusDetailAchieved = {
  __typename: 'ServiceLevelAgreementStatusDetailAchieved';
  /** The time when this SLA was achieved. */
  achievedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailBreached = {
  __typename: 'ServiceLevelAgreementStatusDetailBreached';
  /** The time when this SLA breached. */
  breachedAt: DateTime;
  /** The time when we completed this breached SLA. */
  completedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailBreaching = {
  __typename: 'ServiceLevelAgreementStatusDetailBreaching';
  /** The time when this SLA breached. */
  breachedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailCancelled = {
  __typename: 'ServiceLevelAgreementStatusDetailCancelled';
  /** The time when this SLA was cancelled. */
  cancelledAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailImminentBreach = {
  __typename: 'ServiceLevelAgreementStatusDetailImminentBreach';
  /** The time when this SLA will breach. */
  breachingAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailPending = {
  __typename: 'ServiceLevelAgreementStatusDetailPending';
  /** The time when this SLA will breach. */
  breachingAt: DateTime;
};

export type ServiceLevelAgreementStatusSummary = {
  __typename: 'ServiceLevelAgreementStatusSummary';
  firstResponseTime?: Maybe<ServiceLevelAgreementStatusDetail>;
  nextResponseTime?: Maybe<ServiceLevelAgreementStatusDetail>;
};

export type ServiceLevelAgreementStatusTransitionedEntry = {
  __typename: 'ServiceLevelAgreementStatusTransitionedEntry';
  nextStatus: ServiceLevelAgreementStatus;
  previousStatus: ServiceLevelAgreementStatus;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

export enum ServiceLevelAgreementType {
  FirstResponseTime = 'FIRST_RESPONSE_TIME',
  NextResponseTime = 'NEXT_RESPONSE_TIME'
}

export type SetCustomerTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type SetCustomerTenantsOutput = {
  __typename: 'SetCustomerTenantsOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

/** A union of different types of settings. */
export type Setting = BooleanSetting | NumberSetting | StringSetting;

export type SettingScope = {
  __typename: 'SettingScope';
  id?: Maybe<Scalars['ID']['output']>;
  scopeType: SettingScopeType;
};

/** An input to specify the scope for a setting. */
export type SettingScopeInput = {
  /** An optional ID input. Depends on the type of scope if this is required. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Determines the type of the scope. */
  scopeType: SettingScopeType;
};

/** An enum to describe the type of scope the setting is for. */
export enum SettingScopeType {
  /**
   * Scope for any chat application settings
   * An `id` is mandatory and should be a chat application id (`liveChatApp_123`)
   */
  Chat = 'CHAT',
  /**
   * Scope for any user level settings
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  User = 'USER',
  /**
   * Scope for the authenticated user's email notification settings.
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  UserEmailNotifications = 'USER_EMAIL_NOTIFICATIONS',
  /**
   * Scope for the authenticated user's slack notification settings.
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  UserSlackNotifications = 'USER_SLACK_NOTIFICATIONS',
  /**
   * Scope for workspace level settings for the whole workspace.
   * An `id` is not needed as it will implicitly be the current workspace id.
   */
  Workspace = 'WORKSPACE',
  /**
   * Scope for discord notifications configured for the whole workspace.
   * An `id` is mandatory and should be a workspace discord integration id (`wsDiscordInt_123`)
   */
  WorkspaceDiscordNotifications = 'WORKSPACE_DISCORD_NOTIFICATIONS',
  /**
   * Scope for slack support channel settings.
   * An `id` is mandatory and should be a workspace slack channel integration id (`wsSlackInt_123`)
   */
  WorkspaceSlackChannel = 'WORKSPACE_SLACK_CHANNEL',
  /**
   * Scope for slack notifications configured for the whole workspace.
   * An `id` is mandatory and should be a workspace slack integration id (`wsSlackInt_123`)
   */
  WorkspaceSlackNotifications = 'WORKSPACE_SLACK_NOTIFICATIONS'
}

/**
 * An input "union" where exactly one field may be be provided as an input.
 * Current API only supports booleans but as the API expands more optional fields will be added.
 */
export type SettingValueInput = {
  /** If the setting value is a boolean then this field should be set. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** If the setting value is a number then this field should be set */
  number?: InputMaybe<Scalars['Int']['input']>;
  /** If the setting value is a string then this field should be set. */
  string?: InputMaybe<Scalars['String']['input']>;
};

export type ShareThreadToUserInSlackInput = {
  threadId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type ShareThreadToUserInSlackOutput = {
  __typename: 'ShareThreadToUserInSlackOutput';
  error?: Maybe<MutationError>;
};

export type SingleValueMetric = {
  __typename: 'SingleValueMetric';
  values: Array<SingleValueMetricValue>;
};

export type SingleValueMetricOptions = {
  dimension?: InputMaybe<MetricDimensionType>;
  /** Defaults to 24 hours ago. */
  from?: InputMaybe<Scalars['String']['input']>;
  subDimension?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type SingleValueMetricValue = {
  __typename: 'SingleValueMetricValue';
  dimension?: Maybe<MetricDimension>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SlackMessageEntry = {
  __typename: 'SlackMessageEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID']['output'];
  deletedOnSlackAt?: Maybe<DateTime>;
  lastEditedOnSlackAt?: Maybe<DateTime>;
  reactions: Array<SlackReaction>;
  relatedThread?: Maybe<SlackMessageEntryRelatedThread>;
  slackMessageLink: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type SlackMessageEntryRelatedThread = {
  __typename: 'SlackMessageEntryRelatedThread';
  threadId: Scalars['ID']['output'];
};

export type SlackReaction = {
  __typename: 'SlackReaction';
  actors: Array<Actor>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type SlackReplyEntry = {
  __typename: 'SlackReplyEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID']['output'];
  deletedOnSlackAt?: Maybe<DateTime>;
  lastEditedOnSlackAt?: Maybe<DateTime>;
  reactions: Array<SlackReaction>;
  slackMessageLink: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type SlackThreadChannelAssociation = ThreadChannelAssociation & {
  __typename: 'SlackThreadChannelAssociation';
  companyId?: Maybe<Scalars['ID']['output']>;
  connectedSlackChannelId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SlackThreadChannelDetails = {
  __typename: 'SlackThreadChannelDetails';
  slackChannelId: Scalars['String']['output'];
  slackChannelName: Scalars['String']['output'];
  slackTeamId: Scalars['String']['output'];
  slackTeamName: Scalars['String']['output'];
};

export type SlackUser = {
  __typename: 'SlackUser';
  createdAt: DateTime;
  createdBy: InternalActor;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isInChannel: Scalars['Boolean']['output'];
  slackAvatarUrl72px?: Maybe<Scalars['String']['output']>;
  slackHandle: Scalars['String']['output'];
  slackUserId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SlackUserConnection = {
  __typename: 'SlackUserConnection';
  edges: Array<SlackUserEdge>;
  pageInfo: PageInfo;
};

export type SlackUserEdge = {
  __typename: 'SlackUserEdge';
  cursor: Scalars['String']['output'];
  node: SlackUser;
};

export type SlackUserIdentity = {
  __typename: 'SlackUserIdentity';
  slackTeamId: Scalars['String']['output'];
  slackUserId: Scalars['String']['output'];
};

export type Snippet = {
  __typename: 'Snippet';
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<InternalActor>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  markdown?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SnippetConnection = {
  __typename: 'SnippetConnection';
  edges: Array<SnippetEdge>;
  pageInfo: PageInfo;
};

export type SnippetEdge = {
  __typename: 'SnippetEdge';
  cursor: Scalars['String']['output'];
  node: Snippet;
};

export enum SnoozeStatusDetail {
  WaitingForCustomer = 'WAITING_FOR_CUSTOMER',
  WaitingForDuration = 'WAITING_FOR_DURATION'
}

export type SnoozeThreadInput = {
  durationSeconds?: InputMaybe<Scalars['Int']['input']>;
  statusDetail?: InputMaybe<SnoozeStatusDetail>;
  threadId: Scalars['ID']['input'];
};

export type SnoozeThreadOutput = {
  __typename: 'SnoozeThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StartServiceAuthorizationInput = {
  /** One of: zendesk, salesforce, freshdesk, helpscout-mailbox, hubspot, jira. */
  serviceIntegrationKey: Scalars['String']['input'];
};

export type StartServiceAuthorizationOutput = {
  __typename: 'StartServiceAuthorizationOutput';
  connectionDetails?: Maybe<ServiceAuthorizationConnectionDetails>;
  error?: Maybe<MutationError>;
};

export enum StatusDetailType {
  Created = 'CREATED',
  DoneManuallySet = 'DONE_MANUALLY_SET',
  Ignored = 'IGNORED',
  InProgress = 'IN_PROGRESS',
  NewReply = 'NEW_REPLY',
  ThreadDiscussionResolved = 'THREAD_DISCUSSION_RESOLVED',
  ThreadLinkUpdated = 'THREAD_LINK_UPDATED',
  TimerExpired = 'TIMER_EXPIRED',
  WaitingForCustomer = 'WAITING_FOR_CUSTOMER',
  WaitingForDuration = 'WAITING_FOR_DURATION'
}

export type StringInput = {
  value: Scalars['String']['input'];
};

/**
 * The different ways in which a string is matched.
 * Exactly one of these must be provided in a single search expression.
 */
export type StringSearchExpression = {
  /** Case-insensitive match values containing the provided string. */
  caseInsensitiveContains?: InputMaybe<Scalars['String']['input']>;
};

/** A string setting */
export type StringSetting = {
  __typename: 'StringSetting';
  /** The setting code. */
  code: Scalars['String']['output'];
  /** The scope of the setting. */
  scope: SettingScope;
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  stringValue: Scalars['String']['output'];
};

export type Subscription = {
  __typename: 'Subscription';
  customerCardInstanceChanges: CustomerCardInstanceChangesResult;
  customerChanges: CustomerChange;
  threadChanges: ThreadChange;
  threadFieldSchemaChanges: ThreadFieldSchemaChange;
  threadTimelineChanges: TimelineEntryChange;
  timelineChanges: TimelineEntryChange;
  userChanges: UserChange;
};


export type SubscriptionCustomerCardInstanceChangesArgs = {
  customerId: Scalars['ID']['input'];
};


export type SubscriptionCustomerChangesArgs = {
  filters?: InputMaybe<CustomerChangesFilter>;
};


export type SubscriptionThreadTimelineChangesArgs = {
  threadId: Scalars['ID']['input'];
};


export type SubscriptionTimelineChangesArgs = {
  customerId: Scalars['ID']['input'];
};

export type SubscriptionAcknowledgement = {
  __typename: 'SubscriptionAcknowledgement';
  subscriptionId: Scalars['ID']['output'];
};

export type SubscriptionEventType = {
  __typename: 'SubscriptionEventType';
  description: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
};

export type SupportEmailAddressEmailActor = {
  __typename: 'SupportEmailAddressEmailActor';
  supportEmailAddress: Scalars['String']['output'];
};

export type SyncBusinessHoursSlotsInput = {
  slots: Array<BusinessHoursSlotInput>;
};

export type SyncBusinessHoursSlotsOutput = {
  __typename: 'SyncBusinessHoursSlotsOutput';
  error?: Maybe<MutationError>;
  slots: Array<BusinessHoursSlot>;
};

export type System = {
  __typename: 'System';
  id: Scalars['ID']['output'];
};

export type SystemActor = {
  __typename: 'SystemActor';
  systemId: Scalars['ID']['output'];
};

export type Tenant = {
  __typename: 'Tenant';
  createdAt: DateTime;
  createdBy: InternalActor;
  externalId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tier?: Maybe<Tier>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url?: Maybe<Scalars['String']['output']>;
};

export type TenantConnection = {
  __typename: 'TenantConnection';
  edges: Array<TenantEdge>;
  pageInfo: PageInfo;
};

export type TenantEdge = {
  __typename: 'TenantEdge';
  cursor: Scalars['String']['output'];
  node: Tenant;
};

export type TenantIdentifierInput = {
  externalId?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

export type TenantSearchResult = {
  __typename: 'TenantSearchResult';
  tenant: Tenant;
};

export type TenantSearchResultConnection = {
  __typename: 'TenantSearchResultConnection';
  edges: Array<TenantSearchResultEdge>;
  pageInfo: PageInfo;
};

export type TenantSearchResultEdge = {
  __typename: 'TenantSearchResultEdge';
  cursor: Scalars['String']['output'];
  node: TenantSearchResult;
};

export type TenantTierMembership = {
  __typename: 'TenantTierMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  tenantId: Scalars['ID']['output'];
  tierId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** Query to search for tenants. */
export type TenantsSearchQuery = {
  /**
   * The term to search for. It must be at least 2 characters long. The search is case-insensitive on these two fields:
   * - the tenant name (partial match)
   * - the tenant external id (exact match)
   */
  term: Scalars['String']['input'];
};

/** A thread represents a conversation with a customer, around a specific topic. */
export type Thread = {
  __typename: 'Thread';
  /** Additional assignees for this thread. */
  additionalAssignees: Array<ThreadAssignee>;
  /** The datetime when this thread was last assigned to someone or something. */
  assignedAt?: Maybe<DateTime>;
  /** Who or what this thread is assigned to. */
  assignedTo?: Maybe<ThreadAssignee>;
  /** The channel this thread belongs to. */
  channel: ThreadChannel;
  /** Details about the channel this thread is on. */
  channelDetails?: Maybe<ThreadChannelDetails>;
  /** The datetime when this thread was created. */
  createdAt: DateTime;
  /** The actor who created this thread. */
  createdBy: Actor;
  /** The customer involved in this thread. */
  customer: Customer;
  /** The description of this thread. */
  description?: Maybe<Scalars['String']['output']>;
  /** The external ID of this thread. You can use this field to store your own unique identifier for this thread. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** First inbound message on the thread. */
  firstInboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** First outbound message on the thread. */
  firstOutboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** The unique identifier of the thread. */
  id: Scalars['ID']['output'];
  /** The labels attached to this thread. */
  labels: Array<Label>;
  /** Last inbound message received. */
  lastInboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** Last outbound message received. */
  lastOutboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** The links attached to this thread. */
  links: ThreadLinkConnection;
  /** The preview text of the thread reflects the current state of the thread. As such, it might be updated when new activity happens in the thread. */
  previewText?: Maybe<Scalars['String']['output']>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent. */
  priority: Scalars['Int']['output'];
  /** If this thread has a linked SLA, this will inform on the status of its objectives. */
  serviceLevelAgreementStatusSummary: ServiceLevelAgreementStatusSummary;
  /** The status of this thread. */
  status: ThreadStatus;
  /** The datetime when the status of this thread was last changed. */
  statusChangedAt: DateTime;
  /** The actor who last changed the status of this thread. */
  statusChangedBy: Actor;
  /** Additional details about the current thread status. For instance, how long it will be snoozed for. */
  statusDetail?: Maybe<ThreadStatusDetail>;
  /**
   * The support email addresses involved in this thread.
   * A support email address is either the default support email address or an alternate support email address.
   * A support email address is considered to be involved in a thread when any participant in the thread uses it as their email recipient.
   */
  supportEmailAddresses: Array<Scalars['String']['output']>;
  /** The tenant this thread is associated with. */
  tenant?: Maybe<Tenant>;
  /** The thread discussions attached to this thread. */
  threadDiscussions: Array<ThreadDiscussion>;
  /** The thread fields attached to this thread. */
  threadFields: Array<ThreadField>;
  /** The tier this thread is associated with. Tiers mandate the SLAs for this thread. */
  tier?: Maybe<Tier>;
  /** All of the timeline entries in this thread. */
  timelineEntries: TimelineEntryConnection;
  /** The title of this thread, which allows to quickly identify what it is about. */
  title: Scalars['String']['output'];
  /** The datetime when this thread was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this thread. */
  updatedBy: Actor;
};


/** A thread represents a conversation with a customer, around a specific topic. */
export type ThreadLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A thread represents a conversation with a customer, around a specific topic. */
export type ThreadTimelineEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadTimelineEntriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThreadAdditionalAssigneesTransitionedEntry = {
  __typename: 'ThreadAdditionalAssigneesTransitionedEntry';
  nextAssignees: Array<ThreadAssignee>;
  previousAssignees: Array<ThreadAssignee>;
};

export type ThreadAssignee = MachineUser | System | User;

export type ThreadAssignmentTransitionedEntry = {
  __typename: 'ThreadAssignmentTransitionedEntry';
  nextAssignee?: Maybe<ThreadAssignee>;
  previousAssignee?: Maybe<ThreadAssignee>;
};

export type ThreadChange = {
  __typename: 'ThreadChange';
  changeType: ChangeType;
  thread: Thread;
};

export enum ThreadChannel {
  Api = 'API',
  Chat = 'CHAT',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type ThreadChannelAssociation = {
  companyId?: Maybe<Scalars['ID']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadChannelDetails = SlackThreadChannelDetails;

export type ThreadCluster = {
  __typename: 'ThreadCluster';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  meanDistance: Scalars['Float']['output'];
  sentiment: Scalars['String']['output'];
  threads: Array<ThreadWithDistance>;
  title: Scalars['String']['output'];
};

export type ThreadConnection = {
  __typename: 'ThreadConnection';
  edges: Array<ThreadEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ThreadDiscussion = {
  __typename: 'ThreadDiscussion';
  createdAt: DateTime;
  createdBy: Actor;
  id: Scalars['ID']['output'];
  messages: ThreadDiscussionMessageConnection;
  resolvedAt?: Maybe<DateTime>;
  slackChannelId: Scalars['String']['output'];
  slackChannelName: Scalars['String']['output'];
  slackMessageLink: Scalars['String']['output'];
  slackTeamId: Scalars['String']['output'];
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: Actor;
};


export type ThreadDiscussionMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThreadDiscussionEntry = {
  __typename: 'ThreadDiscussionEntry';
  customerId: Scalars['ID']['output'];
  slackChannelName: Scalars['String']['output'];
  slackMessageLink: Scalars['String']['output'];
  threadDiscussionId: Scalars['ID']['output'];
};

export type ThreadDiscussionMessage = {
  __typename: 'ThreadDiscussionMessage';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  deletedOnSlackAt?: Maybe<DateTime>;
  id: Scalars['ID']['output'];
  lastEditedOnSlackAt?: Maybe<DateTime>;
  reactions: Array<ThreadDiscussionMessageReaction>;
  slackMessageLink: Scalars['String']['output'];
  text: Scalars['String']['output'];
  threadDiscussionId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ThreadDiscussionMessageConnection = {
  __typename: 'ThreadDiscussionMessageConnection';
  edges: Array<ThreadDiscussionMessageEdge>;
  pageInfo: PageInfo;
};

export type ThreadDiscussionMessageEdge = {
  __typename: 'ThreadDiscussionMessageEdge';
  cursor: Scalars['String']['output'];
  node: ThreadDiscussionMessage;
};

export type ThreadDiscussionMessageReaction = {
  __typename: 'ThreadDiscussionMessageReaction';
  actors: Array<Actor>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type ThreadDiscussionResolvedEntry = {
  __typename: 'ThreadDiscussionResolvedEntry';
  customerId: Scalars['ID']['output'];
  resolvedAt: DateTime;
  slackChannelName: Scalars['String']['output'];
  slackMessageLink: Scalars['String']['output'];
  threadDiscussionId: Scalars['ID']['output'];
};

export type ThreadEdge = {
  __typename: 'ThreadEdge';
  cursor: Scalars['String']['output'];
  node: Thread;
};

export type ThreadEvent = {
  __typename: 'ThreadEvent';
  /** The list of components of the event. */
  components: Array<EventComponent>;
  /** The datetime when this event was created. */
  createdAt: DateTime;
  /** The actor who created this event. */
  createdBy: Actor;
  /** The customer that this event belongs to. */
  customerId: Scalars['ID']['output'];
  /** The ID of the event. */
  id: Scalars['ID']['output'];
  /** The thread that this event belongs to. */
  threadId: Scalars['ID']['output'];
  /** The title of the event. */
  title: Scalars['String']['output'];
  /** The datetime when this event was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this event. */
  updatedBy: Actor;
};

export type ThreadEventEntry = TimelineEventEntry & {
  __typename: 'ThreadEventEntry';
  components: Array<EventComponent>;
  customerId: Scalars['ID']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  timelineEventId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ThreadField = {
  __typename: 'ThreadField';
  booleanValue?: Maybe<Scalars['Boolean']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isAiGenerated: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  stringValue?: Maybe<Scalars['String']['output']>;
  threadId: Scalars['ID']['output'];
  type: ThreadFieldSchemaType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadFieldFilter = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  stringValue?: InputMaybe<Scalars['String']['input']>;
};

export type ThreadFieldSchema = {
  __typename: 'ThreadFieldSchema';
  createdAt: DateTime;
  createdBy: InternalActor;
  defaultBooleanValue?: Maybe<Scalars['Boolean']['output']>;
  defaultStringValue?: Maybe<Scalars['String']['output']>;
  dependsOnThreadField?: Maybe<DependsOnThreadFieldType>;
  description: Scalars['String']['output'];
  enumValues: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAiAutoFillEnabled: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  type: ThreadFieldSchemaType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadFieldSchemaChange = {
  __typename: 'ThreadFieldSchemaChange';
  changeType: ChangeType;
  threadFieldSchema: ThreadFieldSchema;
};

export type ThreadFieldSchemaConnection = {
  __typename: 'ThreadFieldSchemaConnection';
  edges: Array<ThreadFieldSchemaEdge>;
  pageInfo: PageInfo;
};

export type ThreadFieldSchemaEdge = {
  __typename: 'ThreadFieldSchemaEdge';
  cursor: Scalars['String']['output'];
  node: ThreadFieldSchema;
};

export type ThreadFieldSchemaOrderInput = {
  order: Scalars['Int']['input'];
  threadFieldSchemaId: Scalars['ID']['input'];
};

export enum ThreadFieldSchemaType {
  Bool = 'BOOL',
  Enum = 'ENUM',
  String = 'STRING'
}

export type ThreadLabelsChangedEntry = {
  __typename: 'ThreadLabelsChangedEntry';
  nextLabels: Array<Label>;
  previousLabels: Array<Label>;
};

export type ThreadLink = {
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status: ThreadLinkStatus;
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type ThreadLinkConnection = {
  __typename: 'ThreadLinkConnection';
  edges: Array<ThreadLinkEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ThreadLinkEdge = {
  __typename: 'ThreadLinkEdge';
  cursor: Scalars['String']['output'];
  node: ThreadLink;
};

export type ThreadLinkGroup = {
  __typename: 'ThreadLinkGroup';
  companyMetrics: ThreadLinkGroupCompanyMetrics;
  /**
   * The current rank of the thread link group considering groups
   * which match the non-ID input filters.
   */
  currentViewRank: Scalars['Int']['output'];
  /**
   * The default rank of the thread link group which takes into account
   * only active groups. This rank is not affected by input filters.
   */
  defaultViewRank?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  threadLinks: ThreadLinkConnection;
  threads: ThreadConnection;
  tierMetrics: ThreadLinkGroupTierMetrics;
};


export type ThreadLinkGroupThreadLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ThreadLinkGroupThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThreadLinkGroupAggregateMetrics = {
  __typename: 'ThreadLinkGroupAggregateMetrics';
  totalCount: Scalars['Int']['output'];
};

export type ThreadLinkGroupCompanyMetrics = {
  __typename: 'ThreadLinkGroupCompanyMetrics';
  byCompany: Array<ThreadLinkGroupSingleCompanyMetrics>;
  /** Metrics when the thread is not associated with any company. */
  noCompany: ThreadLinkGroupAggregateMetrics;
};

export type ThreadLinkGroupConnection = {
  __typename: 'ThreadLinkGroupConnection';
  edges: Array<ThreadLinkGroupEdge>;
  pageInfo: PageInfo;
};

export type ThreadLinkGroupEdge = {
  __typename: 'ThreadLinkGroupEdge';
  cursor: Scalars['String']['output'];
  node: ThreadLinkGroup;
};

export type ThreadLinkGroupFilter = {
  companyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Defaults to [TODO, IN_PROGRESS] */
  statuses?: InputMaybe<Array<ThreadLinkStatus>>;
  threadLinkGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tierIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ThreadLinkGroupSingleCompanyMetrics = {
  __typename: 'ThreadLinkGroupSingleCompanyMetrics';
  company: Company;
  metrics: ThreadLinkGroupAggregateMetrics;
};

export type ThreadLinkGroupSingleTierMetrics = {
  __typename: 'ThreadLinkGroupSingleTierMetrics';
  metrics: ThreadLinkGroupAggregateMetrics;
  tier: Tier;
};

export type ThreadLinkGroupTierMetrics = {
  __typename: 'ThreadLinkGroupTierMetrics';
  byTier: Array<ThreadLinkGroupSingleTierMetrics>;
  /** Metrics when the thread is not associated with any tier. */
  noTier: ThreadLinkGroupAggregateMetrics;
};

/**
 * Represents a simplified, high-level status of a thread link which can be used for filtering and sorting.
 * Statuses from different external providers (e.g. Linear, Jira, Incident.io, Notion... etc) are mapped to one of these values.
 */
export enum ThreadLinkStatus {
  /**
   * Indicates that the linked issue is in a state that is considered finished.
   * This includes granular statuses like "Completed", "Done", "Resolved", "Cancelled", ...etc.
   */
  Done = 'DONE',
  /**
   * Indicates that the linked entity is in a post-start state, but not yet finished.
   * This includes granular statuses like "Started", "In Progress", "In Review", "Blocked", ...etc
   */
  InProgress = 'IN_PROGRESS',
  /**
   * Indicates that the linked entity is in pre-start state.
   * This includes granular statuses like "Backlog", "Triage", "Unstarted", "Draft", "Planned", ...etc
   */
  Todo = 'TODO',
  /** Unknown or unsupported future statuses from external providers. */
  Unknown = 'UNKNOWN'
}

export type ThreadMessageInfo = {
  __typename: 'ThreadMessageInfo';
  /** The source through which the message came through. */
  messageSource: MessageSource;
  /** The datetime when the last message was received. */
  timestamp: DateTime;
};

export type ThreadPriorityChangedEntry = {
  __typename: 'ThreadPriorityChangedEntry';
  nextPriority: Scalars['Int']['output'];
  previousPriority: Scalars['Int']['output'];
};

export type ThreadSearchResult = {
  __typename: 'ThreadSearchResult';
  thread: Thread;
};

export type ThreadSearchResultConnection = {
  __typename: 'ThreadSearchResultConnection';
  edges: Array<ThreadSearchResultEdge>;
  pageInfo: PageInfo;
};

export type ThreadSearchResultEdge = {
  __typename: 'ThreadSearchResultEdge';
  cursor: Scalars['String']['output'];
  node: ThreadSearchResult;
};

export enum ThreadStatus {
  Done = 'DONE',
  Snoozed = 'SNOOZED',
  Todo = 'TODO'
}

export type ThreadStatusDetail = ThreadStatusDetailCreated | ThreadStatusDetailDoneAutomaticallySet | ThreadStatusDetailDoneManuallySet | ThreadStatusDetailIgnored | ThreadStatusDetailInProgress | ThreadStatusDetailLinearUpdated | ThreadStatusDetailNewReply | ThreadStatusDetailReplied | ThreadStatusDetailSnoozed | ThreadStatusDetailThreadDiscussionResolved | ThreadStatusDetailThreadLinkUpdated | ThreadStatusDetailUnsnoozed | ThreadStatusDetailWaitingForCustomer | ThreadStatusDetailWaitingForDuration;

export type ThreadStatusDetailCreated = {
  __typename: 'ThreadStatusDetailCreated';
  createdAt: DateTime;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailDoneAutomaticallySet = {
  __typename: 'ThreadStatusDetailDoneAutomaticallySet';
  afterSeconds?: Maybe<Scalars['Int']['output']>;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailDoneManuallySet = {
  __typename: 'ThreadStatusDetailDoneManuallySet';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailIgnored = {
  __typename: 'ThreadStatusDetailIgnored';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailInProgress = {
  __typename: 'ThreadStatusDetailInProgress';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailLinearUpdated = {
  __typename: 'ThreadStatusDetailLinearUpdated';
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  linearIssueId: Scalars['ID']['output'];
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  statusChangedAt: DateTime;
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  updatedAt: DateTime;
};

export type ThreadStatusDetailNewReply = {
  __typename: 'ThreadStatusDetailNewReply';
  /** @deprecated newReplyAt is no longer supported, query Thread.lastInboundMessageInfo.timestamp instead. */
  newReplyAt?: Maybe<DateTime>;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailReplied = {
  __typename: 'ThreadStatusDetailReplied';
  /** @deprecated ThreadStatusDetailReplied is no longer supported. */
  repliedAt: DateTime;
  /** @deprecated ThreadStatusDetailReplied is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailSnoozed = {
  __typename: 'ThreadStatusDetailSnoozed';
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  snoozedAt: DateTime;
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  snoozedUntil: DateTime;
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailThreadDiscussionResolved = {
  __typename: 'ThreadStatusDetailThreadDiscussionResolved';
  statusChangedAt: DateTime;
  threadDiscussionId?: Maybe<Scalars['ID']['output']>;
};

export type ThreadStatusDetailThreadLinkUpdated = {
  __typename: 'ThreadStatusDetailThreadLinkUpdated';
  linearIssueId?: Maybe<Scalars['ID']['output']>;
  statusChangedAt: DateTime;
  /** @deprecated Use statusChangedAt instead */
  updatedAt: DateTime;
};

export type ThreadStatusDetailUnsnoozed = {
  __typename: 'ThreadStatusDetailUnsnoozed';
  /** @deprecated ThreadStatusDetailUnsnoozed is no longer supported. */
  snoozedAt: DateTime;
  /** @deprecated ThreadStatusDetailUnsnoozed is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailWaitingForCustomer = {
  __typename: 'ThreadStatusDetailWaitingForCustomer';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailWaitingForDuration = {
  __typename: 'ThreadStatusDetailWaitingForDuration';
  statusChangedAt: DateTime;
  waitingUntil: DateTime;
};

export type ThreadStatusTransitionedEntry = {
  __typename: 'ThreadStatusTransitionedEntry';
  nextStatus: ThreadStatus;
  nextStatusDetail?: Maybe<ThreadStatusDetail>;
  previousStatus: ThreadStatus;
  previousStatusDetail?: Maybe<ThreadStatusDetail>;
};

export type ThreadTimelineEntriesFilter = {
  /** Only return message timeline entries. */
  isMessage?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ThreadWithDistance = {
  __typename: 'ThreadWithDistance';
  distance: Scalars['Float']['output'];
  thread: Thread;
};

export type ThreadsFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']['input']>>;
  companyIdentifiers?: InputMaybe<Array<CompanyIdentifierInput>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  customerGroupIdentifiers?: InputMaybe<Array<CustomerGroupIdentifier>>;
  customerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']['input']>;
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  messageSource?: InputMaybe<Array<MessageSource>>;
  priorities?: InputMaybe<Array<Scalars['Int']['input']>>;
  serviceLevelAgreements?: InputMaybe<ServiceLevelAgreementFilter>;
  statusChangedAt?: InputMaybe<DatetimeFilter>;
  statusDetails?: InputMaybe<Array<StatusDetailType>>;
  statuses?: InputMaybe<Array<ThreadStatus>>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
  threadFields?: InputMaybe<Array<ThreadFieldFilter>>;
  threadIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  threadLinkGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tierIdentifiers?: InputMaybe<Array<TierIdentifierInput>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/**
 * Query to search for threads. The search term provided is used to match against different parts of the thread:
 * - its title
 * - its messages
 * - the customer's name
 * - the customer's email
 */
export type ThreadsSearchQuery = {
  /** The term to search for. It must be at least 2 characters long. The search is case-insensitive. */
  term: Scalars['String']['input'];
};

export type ThreadsSort = {
  direction: SortDirection;
  field: ThreadsSortField;
};

export enum ThreadsSortField {
  ClosestToBreachSla = 'CLOSEST_TO_BREACH_SLA',
  CreatedAt = 'CREATED_AT',
  StatusChangedAt = 'STATUS_CHANGED_AT'
}

export type Tier = {
  __typename: 'Tier';
  /** The color to assign to this tier, given by its hex code (e.g. #FABADA). This color is used in Plain's UI to represent this tier. */
  color: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  /**
   * Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it.
   * @deprecated Use defaultThreadPriority instead.
   */
  defaultPriority: Scalars['Int']['output'];
  /** Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it. */
  defaultThreadPriority: Scalars['Int']['output'];
  /** The external ID of this tier. You can use this field to store your own unique identifier for this tier. This must be unique in your workspace. */
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** If true, this tier will be applied to all threads that do not match any other tier. Only one tier can be the default tier. */
  isDefault: Scalars['Boolean']['output'];
  memberships: TierMembershipConnection;
  /** The name of this tier. */
  name: Scalars['String']['output'];
  serviceLevelAgreements: Array<ServiceLevelAgreement>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type TierMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TierConnection = {
  __typename: 'TierConnection';
  edges: Array<TierEdge>;
  pageInfo: PageInfo;
};

export type TierEdge = {
  __typename: 'TierEdge';
  cursor: Scalars['String']['output'];
  node: Tier;
};

export type TierIdentifierInput = {
  externalId?: InputMaybe<Scalars['String']['input']>;
  tierId?: InputMaybe<Scalars['ID']['input']>;
};

export type TierMemberIdentifierInput = {
  companyId?: InputMaybe<Scalars['ID']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

export type TierMembership = CompanyTierMembership | TenantTierMembership;

export type TierMembershipConnection = {
  __typename: 'TierMembershipConnection';
  edges: Array<TierMembershipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TierMembershipEdge = {
  __typename: 'TierMembershipEdge';
  cursor: Scalars['String']['output'];
  node: TierMembership;
};

export type TieredRecurringPrice = RecurringPrice & {
  __typename: 'TieredRecurringPrice';
  billingIntervalCount: Scalars['Int']['output'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
  tiers: Array<PriceTier>;
};

export type Time = {
  __typename: 'Time';
  iso8601: Scalars['String']['output'];
};

export type TimeSeriesMetric = {
  __typename: 'TimeSeriesMetric';
  series: Array<TimeSeriesSeries>;
  timestamps: Array<DateTime>;
};

export type TimeSeriesMetricDimension = {
  __typename: 'TimeSeriesMetricDimension';
  type: TimeSeriesMetricDimensionType;
  value: Scalars['String']['output'];
};

export enum TimeSeriesMetricDimensionType {
  Agent = 'AGENT',
  Company = 'COMPANY',
  CustomerGroup = 'CUSTOMER_GROUP',
  LabelType = 'LABEL_TYPE',
  MessageSource = 'MESSAGE_SOURCE',
  Priority = 'PRIORITY',
  ThreadField = 'THREAD_FIELD',
  Tier = 'TIER'
}

export type TimeSeriesMetricInterval = {
  unit?: InputMaybe<TimeSeriesMetricIntervalUnit>;
};

export enum TimeSeriesMetricIntervalUnit {
  Day = 'DAY',
  Hour = 'HOUR'
}

export type TimeSeriesMetricOptions = {
  dimension?: InputMaybe<TimeSeriesMetricDimensionType>;
  /** Defaults to 24 hours ago. */
  from?: InputMaybe<Scalars['String']['input']>;
  interval?: InputMaybe<TimeSeriesMetricInterval>;
  subDimension?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type TimeSeriesSeries = {
  __typename: 'TimeSeriesSeries';
  dimension?: Maybe<TimeSeriesMetricDimension>;
  values: Array<Maybe<Scalars['Float']['output']>>;
};

export type TimelineEntry = {
  __typename: 'TimelineEntry';
  actor: Actor;
  customerId: Scalars['ID']['output'];
  entry: Entry;
  id: Scalars['ID']['output'];
  threadId: Scalars['ID']['output'];
  timestamp: DateTime;
};

export type TimelineEntryChange = {
  __typename: 'TimelineEntryChange';
  changeType: ChangeType;
  timelineEntry: TimelineEntry;
};

export type TimelineEntryConnection = {
  __typename: 'TimelineEntryConnection';
  edges: Array<TimelineEntryEdge>;
  pageInfo: PageInfo;
};

export type TimelineEntryEdge = {
  __typename: 'TimelineEntryEdge';
  cursor: Scalars['String']['output'];
  node: TimelineEntry;
};

export type TimelineEventEntry = {
  components: Array<EventComponent>;
  customerId: Scalars['ID']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  timelineEventId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Timezone = {
  __typename: 'Timezone';
  name: Scalars['String']['output'];
};

export enum TodoStatusDetail {
  Created = 'CREATED',
  InProgress = 'IN_PROGRESS',
  NewReply = 'NEW_REPLY',
  ThreadDiscussionResolved = 'THREAD_DISCUSSION_RESOLVED',
  ThreadLinkUpdated = 'THREAD_LINK_UPDATED'
}

export type ToggleFeatureEntitlement = BillingFeatureEntitlement & {
  __typename: 'ToggleFeatureEntitlement';
  feature: FeatureKey;
  isEntitled: Scalars['Boolean']['output'];
};

export type ToggleSlackMessageReactionInput = {
  reactionName: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
  timelineEntryId: Scalars['ID']['input'];
};

export type ToggleSlackMessageReactionOutput = {
  __typename: 'ToggleSlackMessageReactionOutput';
  error?: Maybe<MutationError>;
};

export type UnarchiveLabelTypeInput = {
  labelTypeId: Scalars['ID']['input'];
};

export type UnarchiveLabelTypeOutput = {
  __typename: 'UnarchiveLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type UnassignThreadInput = {
  threadId: Scalars['ID']['input'];
};

export type UnassignThreadOutput = {
  __typename: 'UnassignThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UnmarkCustomerAsSpamInput = {
  customerId: Scalars['ID']['input'];
};

export type UnmarkCustomerAsSpamOutput = {
  __typename: 'UnmarkCustomerAsSpamOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type UpdateActiveBillingRotaInput = {
  userIdsToAdd?: InputMaybe<Array<Scalars['ID']['input']>>;
  userIdsToRemove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateActiveBillingRotaOutput = {
  __typename: 'UpdateActiveBillingRotaOutput';
  billingRota?: Maybe<BillingRota>;
  error?: Maybe<MutationError>;
};

export type UpdateAutoresponderInput = {
  autoresponderId: Scalars['ID']['input'];
  conditions?: InputMaybe<Array<AutoresponderConditionInput>>;
  isEnabled?: InputMaybe<BooleanInput>;
  markdownContent?: InputMaybe<OptionalStringInput>;
  messageSources?: InputMaybe<Array<AutoresponderMessageSource>>;
  name?: InputMaybe<StringInput>;
  order?: InputMaybe<IntInput>;
  responseDelaySeconds?: InputMaybe<IntInput>;
  textContent?: InputMaybe<StringInput>;
};

export type UpdateAutoresponderOutput = {
  __typename: 'UpdateAutoresponderOutput';
  autoresponder?: Maybe<Autoresponder>;
  error?: Maybe<MutationError>;
};

export type UpdateChatAppInput = {
  chatAppId: Scalars['ID']['input'];
  name?: InputMaybe<StringInput>;
};

export type UpdateChatAppOutput = {
  __typename: 'UpdateChatAppOutput';
  chatApp?: Maybe<ChatApp>;
  error?: Maybe<MutationError>;
};

export type UpdateCompanyTierInput = {
  companyIdentifier: CompanyIdentifierInput;
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateCompanyTierOutput = {
  __typename: 'UpdateCompanyTierOutput';
  companyTierMembership?: Maybe<CompanyTierMembership>;
  error?: Maybe<MutationError>;
};

export type UpdateConnectedSlackChannelInput = {
  channelType?: InputMaybe<ConnectedSlackChannelType>;
  connectedSlackChannelId: Scalars['ID']['input'];
  isEnabled?: InputMaybe<BooleanInput>;
};

export type UpdateConnectedSlackChannelOutput = {
  __typename: 'UpdateConnectedSlackChannelOutput';
  connectedSlackChannel?: Maybe<ConnectedSlackChannel>;
  error?: Maybe<MutationError>;
};

/** For constraints and details on the fields see the `CustomerCardConfig` type. */
export type UpdateCustomerCardConfigInput = {
  /** If provided, will replace the existing API headers. Requires the `customerCardConfigApiDetails:edit` permission. */
  apiHeaders?: InputMaybe<Array<CustomerCardConfigApiHeaderInput>>;
  /** If provided, will update the API URL. Requires the `customerCardConfigApiDetails:edit` permission. */
  apiUrl?: InputMaybe<StringInput>;
  /** The customer card config to update. */
  customerCardConfigId: Scalars['ID']['input'];
  /** If provided, will update the default time to live seconds. */
  defaultTimeToLiveSeconds?: InputMaybe<IntInput>;
  /** If provided, will update the enabled flag. */
  isEnabled?: InputMaybe<BooleanInput>;
  /** If provided, will update the key. Keys must be unique in a workspace. */
  key?: InputMaybe<StringInput>;
  /** If provided, will update the order. */
  order?: InputMaybe<IntInput>;
  /** If provided, will update the title. */
  title?: InputMaybe<StringInput>;
};

export type UpdateCustomerCardConfigOutput = {
  __typename: 'UpdateCustomerCardConfigOutput';
  /** The updated customer card config. */
  customerCardConfig?: Maybe<CustomerCardConfig>;
  error?: Maybe<MutationError>;
};

export type UpdateCustomerCompanyInput = {
  /** The identifier of the company we want to update the customer with. Pass null if you want to remove the company from the customer. */
  companyIdentifier?: InputMaybe<CompanyIdentifierInput>;
  /** The identifier of the customer we want to update the company for. */
  customerId: Scalars['ID']['input'];
};

export type UpdateCustomerCompanyOutput = {
  __typename: 'UpdateCustomerCompanyOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type UpdateCustomerGroupInput = {
  color?: InputMaybe<StringInput>;
  customerGroupId: Scalars['ID']['input'];
  externalId?: InputMaybe<OptionalStringInput>;
  key?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
};

export type UpdateCustomerGroupOutput = {
  __typename: 'UpdateCustomerGroupOutput';
  customerGroup?: Maybe<CustomerGroup>;
  error?: Maybe<MutationError>;
};

export type UpdateLabelTypeInput = {
  icon?: InputMaybe<OptionalStringInput>;
  labelTypeId: Scalars['ID']['input'];
  name?: InputMaybe<StringInput>;
};

export type UpdateLabelTypeOutput = {
  __typename: 'UpdateLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type UpdateMachineUserInput = {
  description?: InputMaybe<StringInput>;
  fullName?: InputMaybe<StringInput>;
  machineUserId: Scalars['ID']['input'];
  publicName?: InputMaybe<StringInput>;
};

export type UpdateMachineUserOutput = {
  __typename: 'UpdateMachineUserOutput';
  error?: Maybe<MutationError>;
  machineUser?: Maybe<MachineUser>;
};

export type UpdateServiceLevelAgreementInput = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions?: InputMaybe<Array<BreachActionInput>>;
  /** This SLA will breach if it does not receive a first response within this many minutes. May only be provided if the service level agreement is a first response time SLA. */
  firstResponseTimeMinutes?: InputMaybe<IntInput>;
  /** This SLA will breach if it does not receive a next response within this many minutes. May only be provided if the service level agreement is a next response time SLA. */
  nextResponseTimeMinutes?: InputMaybe<IntInput>;
  /** The ID of the SLA to update. */
  serviceLevelAgreementId: Scalars['ID']['input'];
  /** This SLA can only be applied to a thread if it has one of these priority values. If not provided, it defaults to all priorities (0, 1, 2 and 3). */
  threadPriorityFilter?: InputMaybe<IntArrayInput>;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly?: InputMaybe<BooleanInput>;
};

export type UpdateServiceLevelAgreementOutput = {
  __typename: 'UpdateServiceLevelAgreementOutput';
  error?: Maybe<MutationError>;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

/** An input provided to the `updateSetting` mutation. */
export type UpdateSettingInput = {
  /** A code for the setting. */
  code: Scalars['String']['input'];
  /** A valid scope for the setting code. */
  scope: SettingScopeInput;
  /** The setting value. */
  value: SettingValueInput;
};

/**
 * An output type provided by the `updateSetting` mutation.
 * Returns the updated setting or an error.
 */
export type UpdateSettingOutput = {
  __typename: 'UpdateSettingOutput';
  error?: Maybe<MutationError>;
  /** The updated setting. */
  setting?: Maybe<Setting>;
};

export type UpdateSnippetInput = {
  markdown?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
  snippetId: Scalars['ID']['input'];
  text?: InputMaybe<StringInput>;
};

export type UpdateSnippetOutput = {
  __typename: 'UpdateSnippetOutput';
  error?: Maybe<MutationError>;
  snippet?: Maybe<Snippet>;
};

export type UpdateTenantTierInput = {
  tenantIdentifier: TenantIdentifierInput;
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateTenantTierOutput = {
  __typename: 'UpdateTenantTierOutput';
  error?: Maybe<MutationError>;
  tenantTierMembership?: Maybe<TenantTierMembership>;
};

export type UpdateThreadFieldSchemaInput = {
  defaultBooleanValue?: InputMaybe<OptionalBooleanInput>;
  defaultStringValue?: InputMaybe<OptionalStringInput>;
  dependsOnThreadField?: InputMaybe<OptionalDependsOnThreadFieldInput>;
  description?: InputMaybe<StringInput>;
  enumValues?: InputMaybe<Array<Scalars['String']['input']>>;
  isAiAutoFillEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<StringInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  threadFieldSchemaId: Scalars['ID']['input'];
};

export type UpdateThreadFieldSchemaOutput = {
  __typename: 'UpdateThreadFieldSchemaOutput';
  error?: Maybe<MutationError>;
  threadFieldSchema?: Maybe<ThreadFieldSchema>;
};

export type UpdateThreadTenantInput = {
  tenantIdentifier?: InputMaybe<TenantIdentifierInput>;
  threadId: Scalars['ID']['input'];
};

export type UpdateThreadTenantOutput = {
  __typename: 'UpdateThreadTenantOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UpdateThreadTierInput = {
  threadId: Scalars['ID']['input'];
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateThreadTierOutput = {
  __typename: 'UpdateThreadTierOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UpdateThreadTitleInput = {
  threadId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type UpdateThreadTitleOutput = {
  __typename: 'UpdateThreadTitleOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UpdateTierInput = {
  color?: InputMaybe<StringInput>;
  defaultThreadPriority?: InputMaybe<IntInput>;
  externalId?: InputMaybe<OptionalStringInput>;
  isDefault?: InputMaybe<BooleanInput>;
  name?: InputMaybe<StringInput>;
  tierId: Scalars['ID']['input'];
};

export type UpdateTierOutput = {
  __typename: 'UpdateTierOutput';
  error?: Maybe<MutationError>;
  tier?: Maybe<Tier>;
};

export type UpdateWebhookTargetInput = {
  description?: InputMaybe<StringInput>;
  eventSubscriptions?: InputMaybe<Array<WebhookTargetEventSubscriptionInput>>;
  isEnabled?: InputMaybe<BooleanInput>;
  url?: InputMaybe<StringInput>;
  version?: InputMaybe<StringInput>;
  webhookTargetId: Scalars['ID']['input'];
};

export type UpdateWebhookTargetOutput = {
  __typename: 'UpdateWebhookTargetOutput';
  error?: Maybe<MutationError>;
  webhookTarget?: Maybe<WebhookTarget>;
};

export type UpdateWorkflowRuleInput = {
  name?: InputMaybe<StringInput>;
  /** JSON-encoded payload of the rule definition. */
  payload?: InputMaybe<StringInput>;
  workflowRuleId: Scalars['ID']['input'];
};

export type UpdateWorkflowRuleOutput = {
  __typename: 'UpdateWorkflowRuleOutput';
  error?: Maybe<MutationError>;
  workflowRule?: Maybe<WorkflowRule>;
};

export type UpdateWorkspaceEmailSettingsInput = {
  isEnabled: Scalars['Boolean']['input'];
};

export type UpdateWorkspaceEmailSettingsOutput = {
  __typename: 'UpdateWorkspaceEmailSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailSettings?: Maybe<WorkspaceEmailSettings>;
};

export type UpdateWorkspaceInput = {
  name?: InputMaybe<StringInput>;
  publicName?: InputMaybe<StringInput>;
};

export type UpdateWorkspaceOutput = {
  __typename: 'UpdateWorkspaceOutput';
  error?: Maybe<MutationError>;
  workspace?: Maybe<Workspace>;
};

export type UploadFormData = {
  __typename: 'UploadFormData';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type UpsertBusinessHoursInput = {
  weekDays?: InputMaybe<BusinessHoursWeekDaysInput>;
};

export type UpsertBusinessHoursOutput = {
  __typename: 'UpsertBusinessHoursOutput';
  businessHours?: Maybe<BusinessHours>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertCompanyInput = {
  domainName: Scalars['String']['input'];
  identifier: CompanyIdentifierInput;
  name: Scalars['String']['input'];
};

export type UpsertCompanyOutput = {
  __typename: 'UpsertCompanyOutput';
  company?: Maybe<Company>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertCustomerGroupInput = {
  color: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  identifier: CustomerGroupIdentifier;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpsertCustomerGroupOutput = {
  __typename: 'UpsertCustomerGroupOutput';
  customerGroup?: Maybe<CustomerGroup>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertCustomerIdentifierInput = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpsertCustomerInput = {
  identifier: UpsertCustomerIdentifierInput;
  onCreate: UpsertCustomerOnCreateInput;
  onUpdate: UpsertCustomerOnUpdateInput;
};

export type UpsertCustomerOnCreateInput = {
  customerGroupIdentifiers?: InputMaybe<Array<CustomerGroupIdentifier>>;
  email: EmailAddressInput;
  externalId?: InputMaybe<Scalars['ID']['input']>;
  fullName: Scalars['String']['input'];
  shortName?: InputMaybe<Scalars['String']['input']>;
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
};

export type UpsertCustomerOnUpdateInput = {
  email?: InputMaybe<EmailAddressInput>;
  externalId?: InputMaybe<OptionalStringInput>;
  fullName?: InputMaybe<StringInput>;
  shortName?: InputMaybe<OptionalStringInput>;
};

export type UpsertCustomerOutput = {
  __typename: 'UpsertCustomerOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertMyEmailSignatureInput = {
  markdown?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type UpsertMyEmailSignatureOutput = {
  __typename: 'UpsertMyEmailSignatureOutput';
  emailSignature?: Maybe<EmailSignature>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export enum UpsertResult {
  Created = 'CREATED',
  Noop = 'NOOP',
  Updated = 'UPDATED'
}

export type UpsertTenantInput = {
  externalId: Scalars['String']['input'];
  identifier: TenantIdentifierInput;
  name: Scalars['String']['input'];
  url?: InputMaybe<OptionalStringInput>;
};

export type UpsertTenantOutput = {
  __typename: 'UpsertTenantOutput';
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
  tenant?: Maybe<Tenant>;
};

export type UpsertThreadFieldIdentifier = {
  key: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};

export type UpsertThreadFieldInput = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  identifier: UpsertThreadFieldIdentifier;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  type: ThreadFieldSchemaType;
};

export type UpsertThreadFieldOutput = {
  __typename: 'UpsertThreadFieldOutput';
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
  threadField?: Maybe<ThreadField>;
};

export type User = {
  __typename: 'User';
  /** Additional legacy roles that the user has in the workspace. */
  additionalLegacyRoles: Array<Role>;
  /** The avatar URL of the user. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<Actor>;
  /** The email associated with this user. Email is unique per user. */
  email: Scalars['String']['output'];
  /** The full name e.g. Grace Hopper. */
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  /** A short name for use in UI e.g. Grace. */
  publicName: Scalars['String']['output'];
  /** The role of the user in the workspace. */
  role?: Maybe<Role>;
  /** (Legacy) Retrieve roles for a specific workspace + user. */
  roles: Array<Role>;
  /** Connected slack users to this Plain account. */
  slackIdentities: Array<SlackUserIdentity>;
  status: UserStatus;
  statusChangedAt: DateTime;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserAccount = {
  __typename: 'UserAccount';
  /** The email associated with this user. Email is unique per user. */
  email: Scalars['String']['output'];
  /** The full name e.g. Grace Hopper. */
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** A short name for use in UI e.g. Grace. */
  publicName: Scalars['String']['output'];
};

export type UserActor = {
  __typename: 'UserActor';
  user: User;
  userId: Scalars['ID']['output'];
};

export type UserAuthSlackInstallationInfo = {
  __typename: 'UserAuthSlackInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type UserAuthSlackIntegration = {
  __typename: 'UserAuthSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackTeamId: Scalars['String']['output'];
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserChange = {
  __typename: 'UserChange';
  changeType: ChangeType;
  user: User;
};

export type UserConnection = {
  __typename: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserEmailActor = {
  __typename: 'UserEmailActor';
  user: User;
  userId: Scalars['ID']['output'];
};

export type UserLinearInstallationInfo = {
  __typename: 'UserLinearInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type UserLinearIntegration = {
  __typename: 'UserLinearIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  linearOrganisationId: Scalars['ID']['output'];
  linearOrganisationName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserMsTeamsInstallationInfo = {
  __typename: 'UserMSTeamsInstallationInfo';
  installationUrl?: Maybe<Scalars['String']['output']>;
};

export type UserMsTeamsIntegration = {
  __typename: 'UserMSTeamsIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  msTeamsPreferredUsername?: Maybe<Scalars['String']['output']>;
  msTeamsTenantId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserSlackInstallationInfo = {
  __typename: 'UserSlackInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type UserSlackIntegration = {
  __typename: 'UserSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export enum UserStatus {
  Break = 'BREAK',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UsersFilter = {
  /** @deprecated Use isAssignableToThread instead */
  isAssignableToCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  isAssignableToThread?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VerifyWorkspaceEmailDnsSettingsOutput = {
  __typename: 'VerifyWorkspaceEmailDnsSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type VerifyWorkspaceEmailForwardingSettingsInput = {
  isForwardingConfigured: Scalars['Boolean']['input'];
};

export type VerifyWorkspaceEmailForwardingSettingsOutput = {
  __typename: 'VerifyWorkspaceEmailForwardingSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type WebhookTarget = {
  __typename: 'WebhookTarget';
  createdAt: DateTime;
  createdBy: InternalActor;
  description: Scalars['String']['output'];
  eventSubscriptions: Array<WebhookTargetEventSubscription>;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type WebhookTargetConnection = {
  __typename: 'WebhookTargetConnection';
  edges: Array<WebhookTargetEdge>;
  pageInfo: PageInfo;
};

export type WebhookTargetEdge = {
  __typename: 'WebhookTargetEdge';
  cursor: Scalars['String']['output'];
  node: WebhookTarget;
};

export type WebhookTargetEventSubscription = {
  __typename: 'WebhookTargetEventSubscription';
  eventType: Scalars['String']['output'];
};

export type WebhookTargetEventSubscriptionInput = {
  eventType: Scalars['String']['input'];
};

export type WebhookVersion = {
  __typename: 'WebhookVersion';
  isDeprecated: Scalars['Boolean']['output'];
  isLatest: Scalars['Boolean']['output'];
  version: Scalars['String']['output'];
};

export type WebhookVersionConnection = {
  __typename: 'WebhookVersionConnection';
  edges: Array<WebhookVersionEdge>;
  pageInfo: PageInfo;
};

export type WebhookVersionEdge = {
  __typename: 'WebhookVersionEdge';
  cursor: Scalars['String']['output'];
  node: WebhookVersion;
};

export enum WeekDay {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type WorkflowRule = {
  __typename: 'WorkflowRule';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** JSON-encoded payload of the rule definition. */
  payload: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkflowRuleConnection = {
  __typename: 'WorkflowRuleConnection';
  edges: Array<WorkflowRuleEdge>;
  pageInfo: PageInfo;
};

export type WorkflowRuleEdge = {
  __typename: 'WorkflowRuleEdge';
  cursor: Scalars['String']['output'];
  node: WorkflowRule;
};

export type Workspace = {
  __typename: 'Workspace';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isDemoWorkspace: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  publicName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  workspaceChatSettings: WorkspaceChatSettings;
  workspaceEmailSettings: WorkspaceEmailSettings;
};

export type WorkspaceChatSettings = {
  __typename: 'WorkspaceChatSettings';
  isEnabled: Scalars['Boolean']['output'];
};

export type WorkspaceConnection = {
  __typename: 'WorkspaceConnection';
  edges: Array<WorkspaceEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDiscordIntegration = {
  __typename: 'WorkspaceDiscordIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  webhookUrl: Scalars['String']['output'];
};

export type WorkspaceDiscordIntegrationConnection = {
  __typename: 'WorkspaceDiscordIntegrationConnection';
  edges: Array<WorkspaceDiscordIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDiscordIntegrationEdge = {
  __typename: 'WorkspaceDiscordIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceDiscordIntegration;
};

export type WorkspaceEdge = {
  __typename: 'WorkspaceEdge';
  cursor: Scalars['String']['output'];
  node: Workspace;
};

export type WorkspaceEmailDomainSettings = {
  __typename: 'WorkspaceEmailDomainSettings';
  /**
   * The list of alternate email addresses that can be used to send emails to and from the workspace.
   * Limited to 5.
   *
   * e.g. [info@plain.com, help@plain.com].
   */
  alternateSupportEmailAddresses: Array<Scalars['String']['output']>;
  dkimDnsRecord: DnsRecord;
  domainName: Scalars['String']['output'];
  inboundForwardingEmail: Scalars['String']['output'];
  isDomainConfigured: Scalars['Boolean']['output'];
  isForwardingConfigured: Scalars['Boolean']['output'];
  returnPathDnsRecord: DnsRecord;
  supportEmailAddress: Scalars['String']['output'];
};

export type WorkspaceEmailSettings = {
  __typename: 'WorkspaceEmailSettings';
  bccEmail?: Maybe<Scalars['String']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type WorkspaceHmac = {
  __typename: 'WorkspaceHmac';
  createdAt: DateTime;
  createdBy: InternalActor;
  hmacSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceInvite = {
  __typename: 'WorkspaceInvite';
  /** When the invite was created. */
  createdAt: DateTime;
  /** Who sent this invite. */
  createdBy: InternalActor;
  /** The email that is being invited. */
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Whether the person has accepted the invite. */
  isAccepted: Scalars['Boolean']['output'];
  /** The role that the invite will assign on workspace joining. This will replace the roles field. */
  role?: Maybe<Role>;
  /** The roles that the invite will assign on workspace joining. */
  roles: Array<Role>;
  /** When the invite was updated. */
  updatedAt: DateTime;
  /** Who updated this invite. */
  updatedBy: InternalActor;
  /** Whether the user would be assigned a billing rota seat upon joining. */
  usingBillingRotaSeat: Scalars['Boolean']['output'];
  /** The workspace they are being invited to. */
  workspace: Workspace;
};

export type WorkspaceInviteConnection = {
  __typename: 'WorkspaceInviteConnection';
  edges: Array<WorkspaceInviteEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceInviteEdge = {
  __typename: 'WorkspaceInviteEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceInvite;
};

export type WorkspaceMsTeamsInstallationInfo = {
  __typename: 'WorkspaceMSTeamsInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type WorkspaceMsTeamsIntegration = {
  __typename: 'WorkspaceMSTeamsIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  msTeamsTenantId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackChannelInstallationInfo = {
  __typename: 'WorkspaceSlackChannelInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type WorkspaceSlackChannelIntegration = {
  __typename: 'WorkspaceSlackChannelIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackTeamId: Scalars['String']['output'];
  slackTeamImageUrl68px?: Maybe<Scalars['String']['output']>;
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackChannelIntegrationConnection = {
  __typename: 'WorkspaceSlackChannelIntegrationConnection';
  edges: Array<WorkspaceSlackChannelIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceSlackChannelIntegrationEdge = {
  __typename: 'WorkspaceSlackChannelIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceSlackChannelIntegration;
};

export type WorkspaceSlackInstallationInfo = {
  __typename: 'WorkspaceSlackInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type WorkspaceSlackIntegration = {
  __typename: 'WorkspaceSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackChannelName: Scalars['String']['output'];
  slackTeamImageUrl68px?: Maybe<Scalars['String']['output']>;
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackIntegrationConnection = {
  __typename: 'WorkspaceSlackIntegrationConnection';
  edges: Array<WorkspaceSlackIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceSlackIntegrationEdge = {
  __typename: 'WorkspaceSlackIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceSlackIntegration;
};

type ActorParts_CustomerActor_Fragment = { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } };

type ActorParts_DeletedCustomerActor_Fragment = { __typename: 'DeletedCustomerActor', customerId: string };

type ActorParts_MachineUserActor_Fragment = { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } };

type ActorParts_SystemActor_Fragment = { __typename: 'SystemActor', systemId: string };

type ActorParts_UserActor_Fragment = { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } };

export type ActorPartsFragment = ActorParts_CustomerActor_Fragment | ActorParts_DeletedCustomerActor_Fragment | ActorParts_MachineUserActor_Fragment | ActorParts_SystemActor_Fragment | ActorParts_UserActor_Fragment;

export type CompanyPartsFragment = { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } };

export type CustomerActorPartsFragment = { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } };

export type CustomerPartsFragment = { __typename: 'Customer', id: string, fullName: string, shortName?: string | null, externalId?: string | null, email: { __typename: 'EmailAddress', email: string, isVerified: boolean, verifiedAt?: { __typename: 'DateTime', iso8601: string } | null }, updatedAt: { __typename: 'DateTime', iso8601: string }, createdAt: { __typename: 'DateTime', iso8601: string }, createdBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } }, markedAsSpamAt?: { __typename: 'DateTime', iso8601: string } | null };

export type DateTimePartsFragment = { __typename: 'DateTime', iso8601: string };

export type DeletedCustomerActorPartsFragment = { __typename: 'DeletedCustomerActor', customerId: string };

export type MachineUserActorPartsFragment = { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } };

export type MachineUserPartsFragment = { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } };

export type MutationErrorPartsFragment = { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> };

export type SystemActorPartsFragment = { __typename: 'SystemActor', systemId: string };

export type ThreadPartsFragment = { __typename: 'Thread', id: string, externalId?: string | null, status: ThreadStatus, title: string, description?: string | null, previewText?: string | null, priority: number, customer: { __typename: 'Customer', id: string, fullName: string, shortName?: string | null, externalId?: string | null, email: { __typename: 'EmailAddress', email: string, isVerified: boolean, verifiedAt?: { __typename: 'DateTime', iso8601: string } | null }, updatedAt: { __typename: 'DateTime', iso8601: string }, createdAt: { __typename: 'DateTime', iso8601: string }, createdBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } }, markedAsSpamAt?: { __typename: 'DateTime', iso8601: string } | null }, statusDetail?: { __typename: 'ThreadStatusDetailCreated', createdAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailDoneAutomaticallySet' } | { __typename: 'ThreadStatusDetailDoneManuallySet' } | { __typename: 'ThreadStatusDetailIgnored' } | { __typename: 'ThreadStatusDetailInProgress', statusChangedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailLinearUpdated', deprecatedLinearIssueId: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailNewReply', newReplyAt?: { __typename: 'DateTime', iso8601: string } | null } | { __typename: 'ThreadStatusDetailReplied', repliedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailSnoozed', snoozedAt: { __typename: 'DateTime', iso8601: string }, snoozedUntil: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailThreadDiscussionResolved', threadDiscussionId?: string | null, statusChangedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailThreadLinkUpdated', linearIssueId?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailUnsnoozed', snoozedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailWaitingForCustomer', statusChangedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailWaitingForDuration', statusChangedAt: { __typename: 'DateTime', iso8601: string }, waitingUntil: { __typename: 'DateTime', iso8601: string } } | null, statusChangedAt: { __typename: 'DateTime', iso8601: string }, assignedAt?: { __typename: 'DateTime', iso8601: string } | null, assignedTo?: { __typename: 'MachineUser', id: string, fullName: string } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string } | null, createdAt: { __typename: 'DateTime', iso8601: string }, createdBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } }, updatedAt: { __typename: 'DateTime', iso8601: string }, updatedBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } } };

type ThreadStatusDetailParts_ThreadStatusDetailCreated_Fragment = { __typename: 'ThreadStatusDetailCreated', createdAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailDoneAutomaticallySet_Fragment = { __typename: 'ThreadStatusDetailDoneAutomaticallySet' };

type ThreadStatusDetailParts_ThreadStatusDetailDoneManuallySet_Fragment = { __typename: 'ThreadStatusDetailDoneManuallySet' };

type ThreadStatusDetailParts_ThreadStatusDetailIgnored_Fragment = { __typename: 'ThreadStatusDetailIgnored' };

type ThreadStatusDetailParts_ThreadStatusDetailInProgress_Fragment = { __typename: 'ThreadStatusDetailInProgress', statusChangedAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailLinearUpdated_Fragment = { __typename: 'ThreadStatusDetailLinearUpdated', deprecatedLinearIssueId: string, updatedAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailNewReply_Fragment = { __typename: 'ThreadStatusDetailNewReply', newReplyAt?: { __typename: 'DateTime', iso8601: string } | null };

type ThreadStatusDetailParts_ThreadStatusDetailReplied_Fragment = { __typename: 'ThreadStatusDetailReplied', repliedAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailSnoozed_Fragment = { __typename: 'ThreadStatusDetailSnoozed', snoozedAt: { __typename: 'DateTime', iso8601: string }, snoozedUntil: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailThreadDiscussionResolved_Fragment = { __typename: 'ThreadStatusDetailThreadDiscussionResolved', threadDiscussionId?: string | null, statusChangedAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailThreadLinkUpdated_Fragment = { __typename: 'ThreadStatusDetailThreadLinkUpdated', linearIssueId?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailUnsnoozed_Fragment = { __typename: 'ThreadStatusDetailUnsnoozed', snoozedAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailWaitingForCustomer_Fragment = { __typename: 'ThreadStatusDetailWaitingForCustomer', statusChangedAt: { __typename: 'DateTime', iso8601: string } };

type ThreadStatusDetailParts_ThreadStatusDetailWaitingForDuration_Fragment = { __typename: 'ThreadStatusDetailWaitingForDuration', statusChangedAt: { __typename: 'DateTime', iso8601: string }, waitingUntil: { __typename: 'DateTime', iso8601: string } };

export type ThreadStatusDetailPartsFragment = ThreadStatusDetailParts_ThreadStatusDetailCreated_Fragment | ThreadStatusDetailParts_ThreadStatusDetailDoneAutomaticallySet_Fragment | ThreadStatusDetailParts_ThreadStatusDetailDoneManuallySet_Fragment | ThreadStatusDetailParts_ThreadStatusDetailIgnored_Fragment | ThreadStatusDetailParts_ThreadStatusDetailInProgress_Fragment | ThreadStatusDetailParts_ThreadStatusDetailLinearUpdated_Fragment | ThreadStatusDetailParts_ThreadStatusDetailNewReply_Fragment | ThreadStatusDetailParts_ThreadStatusDetailReplied_Fragment | ThreadStatusDetailParts_ThreadStatusDetailSnoozed_Fragment | ThreadStatusDetailParts_ThreadStatusDetailThreadDiscussionResolved_Fragment | ThreadStatusDetailParts_ThreadStatusDetailThreadLinkUpdated_Fragment | ThreadStatusDetailParts_ThreadStatusDetailUnsnoozed_Fragment | ThreadStatusDetailParts_ThreadStatusDetailWaitingForCustomer_Fragment | ThreadStatusDetailParts_ThreadStatusDetailWaitingForDuration_Fragment;

export type UserActorPartsFragment = { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } };

export type UserPartsFragment = { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null };

export type CreateThreadMutationVariables = Exact<{
  input: CreateThreadInput;
}>;


export type CreateThreadMutation = { __typename: 'Mutation', createThread: { __typename: 'CreateThreadOutput', thread?: { __typename: 'Thread', id: string, externalId?: string | null, status: ThreadStatus, title: string, description?: string | null, previewText?: string | null, priority: number, customer: { __typename: 'Customer', id: string, fullName: string, shortName?: string | null, externalId?: string | null, email: { __typename: 'EmailAddress', email: string, isVerified: boolean, verifiedAt?: { __typename: 'DateTime', iso8601: string } | null }, updatedAt: { __typename: 'DateTime', iso8601: string }, createdAt: { __typename: 'DateTime', iso8601: string }, createdBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } }, markedAsSpamAt?: { __typename: 'DateTime', iso8601: string } | null }, statusDetail?: { __typename: 'ThreadStatusDetailCreated', createdAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailDoneAutomaticallySet' } | { __typename: 'ThreadStatusDetailDoneManuallySet' } | { __typename: 'ThreadStatusDetailIgnored' } | { __typename: 'ThreadStatusDetailInProgress', statusChangedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailLinearUpdated', deprecatedLinearIssueId: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailNewReply', newReplyAt?: { __typename: 'DateTime', iso8601: string } | null } | { __typename: 'ThreadStatusDetailReplied', repliedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailSnoozed', snoozedAt: { __typename: 'DateTime', iso8601: string }, snoozedUntil: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailThreadDiscussionResolved', threadDiscussionId?: string | null, statusChangedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailThreadLinkUpdated', linearIssueId?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailUnsnoozed', snoozedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailWaitingForCustomer', statusChangedAt: { __typename: 'DateTime', iso8601: string } } | { __typename: 'ThreadStatusDetailWaitingForDuration', statusChangedAt: { __typename: 'DateTime', iso8601: string }, waitingUntil: { __typename: 'DateTime', iso8601: string } } | null, statusChangedAt: { __typename: 'DateTime', iso8601: string }, assignedAt?: { __typename: 'DateTime', iso8601: string } | null, assignedTo?: { __typename: 'MachineUser', id: string, fullName: string } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string } | null, createdAt: { __typename: 'DateTime', iso8601: string }, createdBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } }, updatedAt: { __typename: 'DateTime', iso8601: string }, updatedBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } } } | null, error?: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CustomerByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type CustomerByEmailQuery = { __typename: 'Query', customerByEmail?: { __typename: 'Customer', id: string, fullName: string, shortName?: string | null, externalId?: string | null, email: { __typename: 'EmailAddress', email: string, isVerified: boolean, verifiedAt?: { __typename: 'DateTime', iso8601: string } | null }, updatedAt: { __typename: 'DateTime', iso8601: string }, createdAt: { __typename: 'DateTime', iso8601: string }, createdBy: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, avatarUrl?: string | null, email: { __typename: 'EmailAddress', email: string }, company?: { __typename: 'Company', id: string, name: string, domainName: string, updatedAt: { __typename: 'DateTime', iso8601: string } } | null } } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string } } } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null, updatedAt: { __typename: 'DateTime', iso8601: string }, deletedAt?: { __typename: 'DateTime', iso8601: string } | null } }, markedAsSpamAt?: { __typename: 'DateTime', iso8601: string } | null } | null };

export const MutationErrorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MutationErrorPartsFragment, unknown>;
export const DateTimePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<DateTimePartsFragment, unknown>;
export const UserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<UserPartsFragment, unknown>;
export const UserActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<UserActorPartsFragment, unknown>;
export const SystemActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}}]} as unknown as DocumentNode<SystemActorPartsFragment, unknown>;
export const MachineUserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<MachineUserPartsFragment, unknown>;
export const MachineUserActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}},{"kind":"Field","name":{"kind":"Name","value":"machineUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<MachineUserActorPartsFragment, unknown>;
export const DeletedCustomerActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]} as unknown as DocumentNode<DeletedCustomerActorPartsFragment, unknown>;
export const CompanyPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<CompanyPartsFragment, unknown>;
export const CustomerActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<CustomerActorPartsFragment, unknown>;
export const ActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}},{"kind":"Field","name":{"kind":"Name","value":"machineUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}}]}}]} as unknown as DocumentNode<ActorPartsFragment, unknown>;
export const CustomerPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}},{"kind":"Field","name":{"kind":"Name","value":"machineUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}}]}}]} as unknown as DocumentNode<CustomerPartsFragment, unknown>;
export const ThreadStatusDetailPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadStatusDetailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailCreated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailSnoozed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snoozedUntil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailUnsnoozed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailNewReply"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newReplyAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailThreadLinkUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linearIssueId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailReplied"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailReplied"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailWaitingForCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailWaitingForDuration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waitingUntil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailInProgress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailThreadDiscussionResolved"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threadDiscussionId"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailLinearUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"deprecatedLinearIssueId"},"name":{"kind":"Name","value":"linearIssueId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<ThreadStatusDetailPartsFragment, unknown>;
export const ThreadPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadStatusDetailParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}},{"kind":"Field","name":{"kind":"Name","value":"machineUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadStatusDetailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailCreated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailSnoozed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snoozedUntil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailUnsnoozed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailNewReply"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newReplyAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailThreadLinkUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linearIssueId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailReplied"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailReplied"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailWaitingForCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailWaitingForDuration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waitingUntil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailInProgress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailThreadDiscussionResolved"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threadDiscussionId"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailLinearUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"deprecatedLinearIssueId"},"name":{"kind":"Name","value":"linearIssueId"}}]}}]}}]} as unknown as DocumentNode<ThreadPartsFragment, unknown>;
export const CreateThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}},{"kind":"Field","name":{"kind":"Name","value":"machineUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadStatusDetailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailCreated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailSnoozed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snoozedUntil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailUnsnoozed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailNewReply"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newReplyAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailThreadLinkUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linearIssueId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailReplied"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailReplied"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repliedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailWaitingForCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailWaitingForDuration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waitingUntil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailInProgress"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailThreadDiscussionResolved"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threadDiscussionId"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadStatusDetailLinearUpdated"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"deprecatedLinearIssueId"},"name":{"kind":"Name","value":"linearIssueId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadStatusDetailParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateThreadMutation, CreateThreadMutationVariables>;
export const CustomerByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}},{"kind":"Field","name":{"kind":"Name","value":"machineUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<CustomerByEmailQuery, CustomerByEmailQueryVariables>;