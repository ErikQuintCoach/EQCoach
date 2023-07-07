import { Button } from "@chakra-ui/react";

export function HeaderLink(props) {
  const { service, ...rest } = props;

  return (
    <>
      <Button
        bg={"white"}
        _hover={{ bg: "white", color: "black" }}
        border={"none"}
        borderRadius={"none"}
        fontWeight={"semibold"}
        fontSize={"16px"}
        {...rest}
      >
        {service.name}
      </Button>
    </>
  );
}
