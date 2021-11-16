import {useState} from "react";
import clsx from "clsx";
import {Tab} from "@headlessui/react";

interface Props {
  elements: {title: string; component: JSX.Element}[];
}

const Tabs: React.FunctionComponent<Props> = (props) => {
  const {elements} = props;

  return (
    <Tab.Group>
      <div className="w-full max-w-md">
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {elements.map((el, i) => (
            <Tab
              key={i}
              className={({selected}) =>
                clsx(
                  "w-full text-sm font-medium",
                  selected
                    ? "bg-white border-blue-400 border-b-4 "
                    : "text-gray-400 hover:bg-white/[0.12] "
                )
              }
            >
              {el.title}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <div className="w-full mt-5">
        <Tab.Panels className="mt-2">
          {elements.map((el, idx) => (
            <Tab.Panel
              key={idx}
              className={clsx(
                "bg-white rounded-xl p-3",
              )}
            >
              {el.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Tabs;

