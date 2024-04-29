import { FormProvider, type SubmitHandler, useForm, useFormContext } from 'react-hook-form';

type FeedFormType = {
  content: string;
  channel: number;
  feedImageIds: [];
};

type FeedFormProviderProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FeedFormType>;
};

const defaultValue: FeedFormType = {
  content: '',
  channel: 1,
  feedImageIds: [],
};

export function FeedFormProvider({ children, onSubmit }: FeedFormProviderProps) {
  const methods = useForm<FeedFormType>({ defaultValues: defaultValue });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export function useFeedFormContext() {
  return useFormContext<FeedFormType>();
}
