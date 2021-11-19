import React from "react";
import * as Yup from "yup";
import {Form, Formik, FormikValues} from "formik";

import Button from "../../shared/components/Button";
import SelectInput from "../../shared/components/Select";
import Card from "../../shared/components/Card";
import TextInput from "../../shared/components/TextInput";
import Toggle from "../../shared/components/Toggle";
import {
  deploy,
  connectMetamask,
  isWeb3Enabled,
  networkMapper,
  ContractArguments,
} from "../../shared/web3";

interface Props {}

const Create: React.FunctionComponent<Props> = (props) => {
  const [network, setNetwork] = React.useState<'polygon' | 'binance' | 'mainnet'>('mainnet')
  const onSubmit = async (data: ContractArguments) => {
    const provider = await isWeb3Enabled();
    if (!provider) return;
    const tx = await deploy(data);
    console.log({tx});
  };

  const changeWalletAddress = async (
    nxtNetwork: "polygon" | "binance" | "mainnet"
  ) => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{chainId: networkMapper[nxtNetwork].id}],
    });
    setNetwork(nxtNetwork)
  };

  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <div className="flex justify-between w-2/3">
        <SelectInput
          label="Network"
          value={network}
          classes={{root: "w-40"}}
          onChange={changeWalletAddress}
          options={[
            {node: "Polygon", value: "polygon"},
            {node: "Ethereum", value: "mainnet"},
            {node: "Binance", value: "binance"},
          ]}
        />
        <Button type="submit" onClick={connectMetamask}>
          Connect metamask
        </Button>
      </div>
      <Card className="w-3/4 z-10">
        <div className="col-span-2 flex justify-center"></div>
        <Formik
          validationSchema={Yup.lazy((values) =>
            Yup.object({
              symbol: Yup.string().required("Campo requerido"),
              name: Yup.string().required("Campo requerido"),
              decimals: Yup.string().required("Campo requerido"),
              initialSuppy: Yup.string().required("Campo requerido"),
            })
          )}
          onSubmit={onSubmit as any}
          initialValues={{
            symbol: "MTKN",
            name: "My token",
            decimals: "18",
            initialSuppy: "10000000",
            maxSupply: "10000000",
            cappital: "10000000",
            burnable: false,
            mintable: false,
            pausable: false,
            cappable: false,
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
                  <h4 className="text-lg text-center">Create ERC20 Token</h4>
                </div>
                <div>
                  <TextInput label="Token name" name="name" />
                  <TextInput label="Token symbol" name="symbol" />
                  <TextInput
                    label="Token decimals"
                    type="number"
                    name="decimals"
                  />
                  <TextInput
                    label="Initial supply"
                    type="number"
                    name="initialSuppy"
                  />
                  <TextInput
                    label="Max supply"
                    type="number"
                    name="maxSupply"
                  />
                </div>
                <div className="grid-cols-2 ">
                  <h4 className="text-center text-md mt-6 col-span-2">
                    Advanced configuration
                  </h4>
                  <div className="flex justify-around mt-4">
                    <Toggle
                      label="Burnable"
                      value={values.burnable}
                      onChange={() =>
                        setFieldValue("burnable", !values.burnable)
                      }
                      classes={{root: "flex-start flex"}}
                    />
                    <Toggle
                      label="Mintable"
                      value={values.mintable}
                      onChange={() =>
                        setFieldValue("mintable", !values.mintable)
                      }
                      classes={{root: "flex-start flex"}}
                    />
                  </div>
                  <div className="flex justify-around mt-4">
                    <Toggle
                      label="Pausable"
                      value={values.pausable}
                      onChange={() =>
                        setFieldValue("pausable", !values.pausable)
                      }
                      classes={{root: "flex-start flex"}}
                    />
                    <Toggle
                      label="Cappable"
                      value={values.cappable}
                      onChange={() =>
                        setFieldValue("cappable", !values.cappable)
                      }
                      classes={{root: "flex-start flex"}}
                    />
                  </div>
                </div>
                <div className="col-span-2 flex justify-center">
                  <Button type="submit">submit</Button>
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
