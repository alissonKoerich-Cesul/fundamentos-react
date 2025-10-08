import { Card, Flex, FormatNumber, FormatNumberProps, Icon, Stat } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IndicatorCardProps extends FormatNumberProps{
  label: string;
  value: number;
  indicator: string;
  icon: IconType;
  colorPallet: string
}

export function IndicatorCard({
  label,
  value,
  indicator,
  icon,
  colorPallet,
  ...rest
}: IndicatorCardProps) {

  const isNegative= indicator.trim().startsWith('-');
  const Indicator= isNegative ? Stat.DownIndicator : Stat.UpIndicator;


  return (
    <Card.Root _hover={{shadow:"md"}}>
      <Card.Body flexDir="row" alignItems="center" gap={6}>
        <Stat.Root>
          <Stat.Label fontSize={"md"}>{label}</Stat.Label>
          <Stat.ValueText>
            <FormatNumber value={value} {...rest}/>
          </Stat.ValueText>
          <Indicator alignSelf="start">{indicator}</Indicator>
        </Stat.Root>

        <Flex
          justify={"center"}
          align="center"
          backgroundColor={`${colorPallet}.100`}
          rounded={"lg"}
          p={4}
        >
          <Icon as={icon} size="xl" color={`${colorPallet}.700`}>

          </Icon>

        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
