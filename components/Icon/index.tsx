import Image from 'next/image';



const iconMap = {
    docker: "/assets/docker-svgrepo-com.svg",
    grafana: "/assets/grafana-svgrepo-com.svg",
    java: "/assets/java-svgrepo-com.svg",
    kubernetes: "/assets/kubernetes-svgrepo-com.svg",
    nextjs: "/assets/nextjs-icon-svgrepo-com.svg",
    typescript: "/assets/Typescript_logo_2020.svg",
} as const;

type IconName = keyof typeof iconMap;

type IconProps = Base &  {
    name:  IconName;
    width?: number;
    height?: number;
}
export const Icon: React.FC<IconProps> = ({name, width = 24, height = 24, className}) => {
    const iconSrc = iconMap[name];

    if (!iconSrc) {
        console.warn(`Icon with name "${name}" not found`);
        return null;
    }

    return (
        <Image
            src={iconSrc}
            alt={name}
            width={width}
            height={height}
            className={className}
        />
    );
};