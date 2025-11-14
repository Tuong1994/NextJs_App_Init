"use client"

import { Form, FormItem, Input, InputPassword } from "@/components/Control";
import { Button } from "@/components/UI";
import { useFormRule } from "@/hooks";

type FormValues = {
  email: string;
  password: string;
};

const Example = () => {
  const { email, password } = useFormRule();

  const initialValues: FormValues = { email: "", password: "" };

  return (
    <Form<FormValues> initialData={initialValues}>
      <FormItem name="email" rules={email()}>
        <Input required label="Email" />
      </FormItem>
      <FormItem name="password" rules={password()}>
        <InputPassword required label="Password" />
      </FormItem>
      <Button>Submit</Button>
    </Form>
  );
};

export default Example;
