import { FC, JSX, useMemo } from "react";
import NavbarItem, { NavbarItemProps } from "./NavbarItem/NavbarItem";
import { NavbarDropdownItemProps } from "./NavbarItem/NavbarDropdown/NavbarDropdownItem/NavbarDropdownItem";
import { IExpertise } from "@/@types/entities/expertises";
import { IServiceLocation } from "@/@types/entities/service-location";
import { ISkill } from "@/@types/entities/skill";
import { ISmallResidentialSpace } from "@/@types/entities/small-residential-space";
import { IUsage } from "@/@types/entities/usage";
import useConfigs from "@/hook/use-configs";


const NavbarItems: FC = (): JSX.Element => {
  const {
    usages: usageList,
    styles: styleList,
    materials: materialList,
    expertises: expertisesList,
    small_residential_spaces: smallResidentialSpacesList,
    skills: skillList,
    service_locations: serviceLocationsList,
  } = useConfigs();

  const serviceLocationsItems = useMemo<NavbarDropdownItemProps[]>(() => {
    const serviceLocations = serviceLocationsList as IServiceLocation[];

    return serviceLocations?.map((location) => ({
      title: location.name,
      link: `/designers/?service_location=${location.id}`,
    }));
  }, [serviceLocationsList]);

  const skillsItems = useMemo<NavbarDropdownItemProps[]>(() => {
    const skills = skillList as ISkill[];

    return skills?.map((skill) => ({
      title: skill.name,
      link: `/designers/?skill=${skill.id}`,
    }));
  }, [skillList]);

  const expertiseItems = useMemo<NavbarDropdownItemProps[]>(() => {
    const expertise = expertisesList as IExpertise[];

    return expertise?.map((ex) => ({
      title: ex.name,
      link: `/designers/?expertise=${ex.id}`,
    }));
  }, [usageList]);

  const smallResidentialSpacesItems = useMemo<NavbarDropdownItemProps[]>(() => {
    const smallResidentialSpaces =
      smallResidentialSpacesList as ISmallResidentialSpace[];

    return smallResidentialSpaces?.map((smallResidentialSpace) => ({
      title: smallResidentialSpace.name,
      link: `/projects/?small_residential_space=${smallResidentialSpace.id}`,
    }));
  }, [smallResidentialSpacesList]);

  const usagesItems = useMemo<NavbarDropdownItemProps[]>(() => {
    const usages = usageList as IUsage[];

    return usages?.map((usage) => {
      if (usage.name == "مسکونی")
        return {
          title: usage.name,
          link: `/projects/?usage=${usage.id}`,
          items: smallResidentialSpacesItems,
        };

      return {
        title: usage.name,
        link: `/projects/?usage=${usage.id}`,
      };
    });
  }, [usageList]);

  const navbarItems = useMemo<NavbarItemProps[]>(() => {
    const items: NavbarItemProps[] = [];
    items.push({
      title: "ایده ها",
      link: "/projects",
      items: [
        {
          title: "",
          link: "",
          items: usagesItems,
          defaultShowSubItems: true,
          hideTitle: true,
        },
      ],
    });

    items.push({
      title: "طراحان",
      link: "/designers",
      items: [
        {
          title: "تخصص ها",
          link: "",
          items: expertiseItems,
          defaultShowSubItems: true,
          hideTitle: true,
        },
      ],
    });

    items.push({
      title: "مجله",
      link: "/blog",
    });
    items.push({
      title: "آگهی‌های استخدام",
      link: "/jobs",
    });

    return items;
  }, [usagesItems, expertiseItems]);

  const navbarItemsElements = useMemo(() => {
    return navbarItems?.map((navbarItem) => (
      <NavbarItem key={navbarItem.title} {...navbarItem} />
    ));
  }, [navbarItems]);

  return <ul className="navbar-items">{navbarItemsElements}</ul>;
};

export default NavbarItems;
