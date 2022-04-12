import { Box, Flex, Heading } from "@chakra-ui/react";
import RestaurantCard from "../components/RestaurantCard";
import * as colors from "../utils/colors";
import React from "react";

function Restaurants() {
  return (
    <Box
      style={{
        marginLeft: "2rem",
        width: "97%",
        margin: "auto",
        marginTop: "1.5rem",
      }}
    >
      <Flex justify="space-between" wrap="wrap" gap="1rem">
        <Heading as="h3" size="lg" style={{ color: colors.purple.medium }}>
          Restaurants
        </Heading>
      </Flex>

      <Box
        id="restaurants"
        style={{
          marginTop: "1rem",
          height: "70vh",
        }}
      >
        <Flex
          style={{
            flexWrap: "wrap",
          }}
          gap="0.5rem"
        >
          {/* // FOR NOW FIX RESULTS */}
          <RestaurantCard
            title="Wendy's"
            restaurantImg="https://sportshub.cbsistatic.com/i/2021/03/18/e88fe780-c0b0-4604-8ca6-bc1f0e9aea31/wendys-logo-1243805.jpg"
          />
          <RestaurantCard
            title="Wendy's"
            restaurantImg="https://sportshub.cbsistatic.com/i/2021/03/18/e88fe780-c0b0-4604-8ca6-bc1f0e9aea31/wendys-logo-1243805.jpg"
          />
          <RestaurantCard
            title="Wendy's"
            restaurantImg="https://sportshub.cbsistatic.com/i/2021/03/18/e88fe780-c0b0-4604-8ca6-bc1f0e9aea31/wendys-logo-1243805.jpg"
          />
          <RestaurantCard
            title="Five Guys"
            restaurantImg="https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/five_guys.jpg"
          />
          <RestaurantCard
            title="Wendy's"
            restaurantImg="https://sportshub.cbsistatic.com/i/2021/03/18/e88fe780-c0b0-4604-8ca6-bc1f0e9aea31/wendys-logo-1243805.jpg"
          />
          <RestaurantCard
            title="McDonald's"
            restaurantImg="https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"
          />
          <RestaurantCard
            title="Five Guys"
            restaurantImg="https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/five_guys.jpg"
          />
          <RestaurantCard
            title="McDonald's"
            restaurantImg="https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"
          />
          <RestaurantCard
            title="McDonald's"
            restaurantImg="https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"
          />
          <RestaurantCard
            title="Five Guys"
            restaurantImg="https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/five_guys.jpg"
          />
          <RestaurantCard
            title="Five Guys"
            restaurantImg="https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/five_guys.jpg"
          />
          <RestaurantCard
            title="Five Guys"
            restaurantImg="https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/five_guys.jpg"
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Restaurants;
