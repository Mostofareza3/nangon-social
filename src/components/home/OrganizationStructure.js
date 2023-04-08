import React from "react";

const OrganizationStructure = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 ">
        <div className="col-span-12 bg-blueGradient rounded-lg ">
          <div className="w-full h-auto p-10  text-light text-base bg-cover">
            <h1 className="text-[1.5rem] font-bold my-3 underline">
              General Council
            </h1>
            <p className="text-base">
              This council will consist of general members and life members.
              This council will approve the annual budget, review the annual
              audit report, amend the constitution and resolve other complex
              issues. The session of this council will be held once a year. But
              it can be done more than once for special needs.
            </p>
            <ul className="ml-8 mt-2 list-disc ">
              <li className="mt-1">
                The number of members of the General Assembly shall be minimum
                23 members. The number of members can be increased if necessary.
              </li>
              <li className="mt-1">
                There should be women members in the General Assembly.
              </li>
              <li className="mt-1">
                Members of the General Assembly must be of sound mind and at
                least 18 years of age. Members must have experience in community
                development and an interest in serving on the highest council in
                solidarity with the philosophy of the organization.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-6 bg-greenGradient rounded-lg ">
          <div className="w-full h-auto p-10  text-light text-base bg-cover">
            <h1 className="text-[1.5rem] font-bold my-3 underline">
              Executive Council
            </h1>
            <p className="text-base">
              The Executive Council of the Foundation will consist of 07 (seven)
              persons elected or nominated from among the members of the General
              Assembly. The elected members will serve as executive members for
              02 (two) years. The organizational structure of the Executive
              Council is as follows: Sequential designation comments-
            </p>
            <ol className="list-decimal ml-8">
              <li className="mt-1">President</li>
              <li className="mt-1">Vice-Presidents</li>
              <li className="mt-1">General Secretary</li>
              <li className="mt-1">Joint General Secretary</li>
              <li className="mt-1">Treasurer</li>
              <li className="mt-1">executive members</li>
              <ul className="list-disc ml-3">
                <li>
                  The Executive Council shall be elected for 2 years by voting
                  or nomination of the members of the General Council.
                </li>
                <li>
                  The newly elected executive council shall assume
                  responsibility within 15 (fifteen) days after the election.
                </li>
              </ul>
            </ol>
          </div>
        </div>
        <div className="col-span-6 bg-greenGradient rounded-lg ">
          <div className="w-full h-auto p-10  text-light text-base bg-cover">
            <h1 className="text-[1.5rem] font-bold my-3 underline">
              Advisory Council
            </h1>
            <p className="text-base">
              This council of the foundation will have an advisory council
              consisting of 07 (seven) members. Advisors will provide sound
              advice and support for successful implementation of various
              developmental activities undertaken by the organization. An
              advisory council will be constituted with educationists
              (past/present), doctors, bankers, imams/alems, government
              officials (past/present), eminent businessmen, lawyers and
              ex-members/chairmen/dignitaries of the respective areas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationStructure;
