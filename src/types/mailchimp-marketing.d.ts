declare module '@mailchimp/mailchimp_marketing' {
  interface MailchimpConfig {
    apiKey: string;
    server: string;
  }

  interface MergeFields {
    [key: string]: any;
  }

  interface AddListMemberParams {
    email_address: string;
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
    merge_fields?: MergeFields;
  }

  interface Lists {
    addListMember(
      listId: string,
      params: AddListMemberParams
    ): Promise<any>;
  }

  interface Mailchimp {
    setConfig(config: MailchimpConfig): void;
    lists: Lists;
  }

  const mailchimp: Mailchimp;
  export default mailchimp;
}
