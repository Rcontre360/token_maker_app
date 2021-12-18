import {Fragment, InputHTMLAttributes, useState} from "react";
import clsx from "clsx";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: {node: string; value: string, img?: {src: string}}[];
  value: string | number;
  classes?: Partial<Record<"root" | "input" | "options", string>>;
  onChange?: (arg: unknown) => void;
  name?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

const SelectInput: React.FunctionComponent<Props> = (props) => {
  const {
    label,
    options,
    classes,
    onChange,
    name,
    error,
    helperText,
    ...rest
  } = props;
  const option = options.find((opt) => opt.value === rest.value);

  return (
    <div className={classes?.root || "w-full"}>
      {label && <span className='text-xs text-gray-500'>{label}</span>}
      <div
        className={clsx(
          "relative rounded-md border-gray-300 border-2 focus:border-blue-400 hover:border-blue-400 p-1"
        )}
      >
        <Listbox
          {...(rest as any)}
          onChange={onChange}
          as="div"
        >
          <Listbox.Button className="text-left w-full pl-1 pr-4 sm:text-sm rounded-md">
            <span className="block truncate">{option?.node}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20 min-w-40" style={{minWidth: '100px'}}>
              {options.map((opt, i) => (
                <Listbox.Option
                  key={i}
                  className={({active}) =>
                    `${active ? "text-amber-900 bg-purple-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 px-4`
                  }
                  value={opt.value}
                >
                  {({selected, active}) => (
                    <div className='flex items-center'>
                      {
                        opt.img &&
                        <img src={opt.img.src} width='30px' height='30px' />
                      }
                      <span
                        className={`${selected ? "font-medium" : "font-normal"
                          } block truncate ml-4`}
                      >
                        {opt.node}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
      {helperText && (
        <span
          className={clsx(error ? "text-red-500" : "text-blue-500", "text-xs")}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default SelectInput;

