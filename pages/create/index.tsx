import React from "react";
import * as Yup from "yup";
import {Form, Formik, FormikValues} from "formik";
import Card from "../../shared/components/Card";
import TextInput from "../../shared/components/TextInput";
import Toggle from "../../shared/components/Toggle";

interface Props {}

const Create: React.FunctionComponent<Props> = (props) => {
  const onSubmit = (data: unknown) => {};

  return (
    <div className="flex justify-center items-center pt-24">
      <div className="absolute -left-72 bg-three transform -rotate-45 w-full h-5/6"></div>
      <Card className='w-3/4 z-10'>
        <Formik
          validationSchema={Yup.lazy((values) =>
            Yup.object({
              username: Yup.string().required("Campo requerido"),
              password: Yup.string().required("Campo requerido"),
            })
          )}
          onSubmit={onSubmit as any}
          initialValues={{
            username: "",
            password: "",
          }}
          enableReinitialize={false}
        >
          {({setFieldValue, values}: any) => {
            return (
              <Form
                noValidate
                className="w-full z-10 grid grid-cols-2 gap-4"
                autoComplete="off"
              >
                <div className="col-span-2">
                  <h4 className="text-lg text-white text-center">
                    Create ERC20 Token
                  </h4>
                </div>
                <div>
                  <TextInput
                    label="Token name"
                    name="name"
                    classes={{label: "text-white"}}
                  />
                  <TextInput
                    label="Token symbol"
                    name="symbol"
                    classes={{label: "text-white"}}
                  />
                  <TextInput
                    label="Token decimals"
                    type="number"
                    name="decimals"
                    classes={{label: "text-white"}}
                  />
                  <TextInput
                    label="Initial supply"
                    type="number"
                    name="initialSuppy"
                    classes={{label: "text-white"}}
                  />
                  <TextInput
                    label="Max supply"
                    type="number"
                    name="maxSupply"
                    classes={{label: "text-white"}}
                  />
                </div>
                <div className='flex flex-col justify-between align-left'>
                  <h4 className="text-md">Advanced configuration</h4>
                  <Toggle label='Burnable' classes={{root: 'flex-start flex'}} />
                  <Toggle label='Mintable' classes={{root: 'flex-start flex'}} />
                  <Toggle label='Pausable' classes={{root: 'flex-start flex'}} />
                  <Toggle label='Cappable' classes={{root: 'flex-start flex'}} />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
};

export default Create;
